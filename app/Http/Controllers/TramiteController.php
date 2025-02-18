<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestUpdateTramite;
use App\Http\Requests\TramitePostRequest;
use App\Http\Resources\TramiteCollection;
use App\Http\Resources\Tramite as TramiteResource;
use App\Models\Tareatramite;
use App\Models\Tramite;
use App\Services\TramiteService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TramiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Tramite::class);
        return Inertia::render('Tramites/ListTramites', [
            'tramites' => new TramiteCollection(Tramite::OrderBy('id', 'desc')->with('departamento')->paginate(config('openlink.perpage'))),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Tramite::class);
        return Inertia::render(
            'Tramites/CreateTramite',
            [
                'requisitos' => DB::table('requisitos')->where('activo', true)->select('id', 'nombre', 'objetivo')->get(),
                'departamentos' => DB::table('departamentos')->where('id', '>', 1)->where('activo', true)->select('id', 'nombre')->get(),
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(TramitePostRequest $request)
    {
        //        dd($request);
        $this->authorize('create', Tramite::class);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        DB::beginTransaction();
        try {
            //Guardar los datos del tramite
            $tramite = Tramite::create([
                'nombre' => strtoupper($request->input('nombre')),
                'objetivo' => strtoupper($request->objetivo),
                'fundamento_jur' => strtoupper($request->fundamento_jur),
                'casos' => strtoupper($request->casos),
                'modalidad' => $request->modalidad_id,
                'plazo_respuesta' => $request->plazo_respuesta,
                'costo' => $request->costo,
                'tipo_usuario' => $request->tipo_usuario_id,
                'by' => Auth::id(),
                'activo' => $request->activo,
                'url_proceso' => $request->url_proceso,
                'tipo' => $request->tipo_id,
                'ser_recibido' => $request->ser_recibido_id,
                'url_proceso' => $request->url_proceso,
                'departamento_id' => $request->departamento_id,
                'by' => Auth::id(),
            ]);
            //Guardar los requisitos del tramite
            foreach ($request->requisitos as $requisito) {
                $tramite->requisitos()->attach($requisito['id']);
            }

            //Guardar las tareas del tramite
            foreach ($request->tareas as $tarea) {
                Tareatramite::create(
                    [
                        'nombre' => $tarea,
                        'tramite_id' => $tramite->id,
                    ]
                );
            }
            DB::commit();
            return Redirect::route('admin.tramites')->banner('Trámite Guardado.');
        } catch (\Exception $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Http\Response
     */
    public function show(Tramite $tramite)
    {
        $this->authorize('viewAny', Tramite::class);
        $tramite->load('departamento', 'requisitos');
        return Inertia::render(
            'Tramites/ShowTramite',
            [
                'tramite' => new TramiteResource($tramite),
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Http\Response
     */
    public function edit(Tramite $tramite)
    {
        $this->authorize('create', Tramite::class);
        return Inertia::render(
            'Tramites/EditTramite',
            [
                'tramite' => new TramiteResource($tramite),
                'departamentos' => DB::table('departamentos')->where('id', '>', 1)->where('activo', true)->select('id', 'nombre')->get(),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Http\Response
     */
    public function update(RequestUpdateTramite $request, Tramite $tramite, TramiteService $tramiteService)
    {
        $this->authorize('updateRequest', Tramite::class);
        $tramiteService->updateTramite($request, $tramite);
        return Redirect::route('admin.tramites');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tramite $tramite)
    {
        //
    }
}
