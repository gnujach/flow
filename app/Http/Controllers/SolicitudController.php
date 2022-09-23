<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use App\Models\Tareatramite;
use App\Models\Historysolicitud;
use App\Models\Tramite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Rules\Recaptcha;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\SolicitudCollection;

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
            'solicitudes' => new SolicitudCollection(Solicitud::OrderBy('id', 'desc')->with(['cliente', 'medio', 'tramite'])->paginate(config('openlink.perpage'))),
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
            'departamentos' => DB::table('departamentos')->where('id', '>', 0)->where('activo', true)->select('id', 'nombre')->get(),
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
                'modified_by' => Auth::id(),
                'concluido' => $request->concluido,]);
            //Guardar las tareas del tramite
            foreach ($request->tareas as $tarea) {
                Historysolicitud::create(
                    [
                        'solicitud_id' => $solicitud->id,
                        'task_id' => $tarea,
                        'by' => Auth::id(),
                    ]);
            }
            DB::commit();
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
        $task = Tareatramite::where('tramite_id', $solicitud->tramite_id)->get();
        $solicitud = Solicitud::where('id', $solicitud->id)->with('tramite', 'historysolicitud')->get();
        $res = ['tareas' => $task, 'sol' => $solicitud];
        return response()->json($res);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Solicitud $solicitud
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Solicitud $solicitud)
    {
        //
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
}
