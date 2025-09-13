<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use App\Models\Tareatramite;
use App\Models\Historysolicitud;
use App\Models\Tramite;
use App\Models\Departamento;
use App\Services\SolicitudService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Rules\Recaptcha;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\SolicitudCollection;
use App\Exports\SolicitudsExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmailJob;

class SolicitudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('create', Solicitud::class);
        return Inertia::render('Solicitudes/ListSolicitudes', [
            'solicitudes' => new SolicitudCollection(Solicitud::whereHas('tramite', function ($query) {
                $query->where('centro_id', Auth::user()->centro_id)->orwhere('by', Auth::user()->id);
            })->OrderBy('id', 'desc')
                ->with(['cliente', 'medio', 'tramite', 'tramite.departamento:id,nombre', 'user:id,name'])
                ->paginate(config('openlink.perpage'))),
        ]);
    }
    public function listarPendientes()
    {
        $this->authorize('create', Solicitud::class);
        // return Inertia::render('Solicitudes/ListSolicitudes', [
        //     'solicitudes' => new SolicitudCollection(Solicitud::where('by', Auth::user()->id)->where('concluido', false)
        //         ->OrderBy('id', 'desc')
        //         ->with(['cliente', 'medio', 'tramite', 'tramite.departamento:id,nombre', 'user:id,name'])
        //         ->paginate(config('openlink.perpage'))),
        // ]);
        $userId = Auth::id();
        $userDepartamentoId = Auth::user()->departamento_id;

        // dd($userDepartamentoId);
        $solicitudes =  new SolicitudCollection(
            Solicitud::whereHas('tramite', function ($query) use ($userDepartamentoId) {
                $query->where('departamento_id', $userDepartamentoId);
            })
                ->where(['concluido'=> false, 'centro_id' => Auth::user()->centro_id])
                ->OrderBy('id', 'desc')
                ->with(['cliente', 'medio', 'tramite', 'tramite.departamento:id,nombre', 'user:id,name'])
                ->paginate(config('openlink.perpage'))
        );

        // $solicitudes = new SolicitudCollection(
        //     $solicitudes = Solicitud::whereHas('tramite', function ($query) use ($userId) {
        //         $query->whereHas('departamento', function ($q) use ($userId) {
        //             $q->where('id', function ($subquery) use ($userId) {
        //                 $subquery->select('departamento_id')
        //                     ->from('users')
        //                     ->where('id', $userId);
        //             });
        //         });
        //     })->where('concluido',false)->OrderBy('id', 'desc')
        //         ->with(['cliente', 'medio', 'tramite', 'tramite.departamento:id,nombre', 'user:id,name'])
        //         ->paginate(config('openlink.perpage'))
        // );

        return Inertia::render('Solicitudes/ListSolicitudes', [
            'solicitudes' => $solicitudes,
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function listadmin()
    {
        $this->authorize('view', Solicitud::class);
        return Inertia::render('Solicitudes/ListSolicitudesAdmin', [
            'solicitudes' => new SolicitudCollection(Solicitud::OrderBy('id', 'desc')
                ->with(['cliente', 'medio', 'tramite', 'centro', 'tramite.departamento:id,nombre'])
                ->paginate(config('openlink.perpage'))),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Solicitud::class);
        return Inertia::render('Solicitudes', [
            // 'departamentos' => DB::table('departamentos')->where('id', '>', 0)->where('activo', true)->select('id', 'nombre')->get(),
            'departamentos' => Departamento::where('activo', true)->get(),
            // 'departamentos' => DB::table('departamentos')->where('id', '>', 0)->where('activo', true)->select('id', 'nombre')->get(),
            'tramites' => Tramite::where('activo', true)->with(['requisitos', 'departamento', 'Tareastramite'])->get(),
            'medios' => DB::table('medios')->where('id', '>', 0)->where('activo', true)->select('id', 'nombre')->get(),
        ]);
    }


    /**
     * Probando formulario Recaptcha
     * @return \Illuminate\Http\Response
     */

    public function recaptcha()
    {
        return Inertia::render('Solicitudes/request');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */


    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $solicitud = Solicitud::create([
                'by' => Auth::id(),
                'cliente_id' => $request->cliente_id,
                'tramite_id' => $request->tramite_id,
                'medio_id' => $request->medio_id,
                'centro_id' => Auth::user()->centro_id,
                'modified_by' => Auth::id(),
                'concluido' => $request->concluido,
                'nota' => $request->nota
            ]);
            //Guardar las tareas del tramite
            foreach ($request->tareas as $tarea) {
                Historysolicitud::create(
                    [
                        'solicitud_id' => $solicitud->id,
                        'task_id' => $tarea,
                        'by' => Auth::id(),
                    ]
                );
            }
            DB::commit();
            if ($solicitud->concluido && !empty($solicitud->cliente->email)) {
                $solicitud->load('cliente');
                $email = env('SEG_MAIL');
                $maildata = [
                    'email' => trim($email),
                    'nombre_cliente' => $solicitud->cliente->full_name,
                    // 'url' => 'https://encuestas.strc.guanajuato.gob.mx/#/enc/dac2b5bd-4b20-ff88-14bb-b2063669210c/bdec9998-2189-de78-4ee6-adb113a83ced',
                    'url' => 'https://forms.office.com/r/4JYzyCTnaY?origin=lprLink',
                    'folio' => $solicitud->id,
                    'concluido' => 'A',
                    'correo' =>  trim($solicitud->cliente->email),
                ];
                dispatch(new SendEmailJob($maildata));
            } else if (!empty($solicitud->cliente->email)) {
                $solicitud->load('cliente');
                $email = env('SEG_MAIL');
                $maildata = [
                    'email' => trim($email),
                    'nombre_cliente' => $solicitud->cliente->full_name,
                    'url' => 'https://flow.open-link.net/request',
                    'folio' => $solicitud->id,
                    'concluido' => 'B',
                    'correo' =>  trim($solicitud->cliente->email),
                ];
                dispatch(new SendEmailJob($maildata));
            }
            return Redirect::route('solicitudes.list')->banner('Solicitud Guardada.');
        } catch (\Exception $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Solicitud $solicitud
     * @return \Illuminate\Http\Response
     */
    public function show(Solicitud $solicitud, Request $request)
    {
        request()->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:100', 'email'],
            'captcha_token' => [new Recaptcha],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Solicitud $solicitud
     * @return \Illuminate\Http\Response
     */
    public function edit(Solicitud $solicitud)
    {
        //        $task = Tareatramite::where('tramite_id', $solicitud->tramite_id)->get();
        //        $solicitud = Solicitud::where('id', $solicitud->id)->with('tramite', 'historysolicitud', 'cliente')->get();
        //        $res = ['tareas' => $task, 'sol' => $solicitud];
        return response()->json($solicitud);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Solicitud $solicitud
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Solicitud $solicitud, SolicitudService $solicitudService)
    {

        $solicitudService->updateSolicitud($request, $solicitud);
        //        $tramiteconcluido =
        return Inertia::render('Solicitudes/ListSolicitudes', [
            'solicitudes' => new SolicitudCollection(Solicitud::OrderBy('id', 'desc')->paginate(config('openlink.perpage'))),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Solicitud $solicitud
     * @return \Illuminate\Http\Response
     */
    public function destroy(Solicitud $solicitud)
    {
        //
    }

    /** exporte to excel */

    public function export()
    {
        $this->authorize('create', Solicitud::class);
        return Excel::download(new SolicitudsExport, 'solicitudes.xlsx');
    }
}
