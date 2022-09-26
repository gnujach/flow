<?php

namespace App\Http\Controllers;

use App\Models\Puesto;
use Illuminate\Http\Request;
use App\Http\Requests\CreatePuestoRequest;
use App\Http\Requests\UpdatePuestoRequest;
use Illuminate\Support\Facades\Auth;
use App\Services\PuestoService;
use App\Http\Resources\Puesto as PuestoResource;
use App\Http\Resources\PuestoCollection;
use Inertia\Inertia;
use Redirect;
use Illuminate\Support\Facades\DB;

class PuestoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render(
            'Puestos/ListPuestos',
            [
                'puestos' => new PuestoCollection(Puesto::orderBy('id', 'desc')
                    ->where('id', '>', 1)
                    ->paginate(config('openlink.perpage'))),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Puesto::class);
        return Inertia::render(
            'Puestos/CreatePuesto',
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePuestoRequest $request, PuestoService $servicePuesto)
    {
        $this->authorize('create', Puesto::class);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        $puesto = $servicePuesto->storePuesto($request);
        return Redirect::route('admin.puestos/');
        // return Inertia::render(
        //     'Puestos/CreatePuesto',
        //     [
        //         'puesto' => new PuestoResource($puesto),
        //     ],
        // );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Puesto $puesto
     * @return \Illuminate\Http\Response
     */
    public function show(Puesto $puesto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Puesto $puesto
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Puesto $puesto)
    {
        $this->authorize('updatebyUser', Puesto::class);
        return Inertia::render(
            'Puestos/EditPuesto',
            [
                'puesto' => new PuestoResource($puesto),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Puesto $puesto
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePuestoRequest $request, Puesto $puesto, puestoService $puestoService)
    {
        $this->authorize('updatebyUser', Puesto::class);
        $puesto = $puestoService->updatePuesto($request, $puesto);
        return Redirect::route('admin.puestos/');
        // return Inertia::render(
        //     'Puestos/EditPuesto',
        //     [
        //         'puesto' => new PuestoResource($puesto),
        //     ]
        // );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Puesto $puesto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Puesto $puesto)
    {
        //
    }
}
