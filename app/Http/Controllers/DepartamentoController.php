<?php

namespace App\Http\Controllers;

use App\Models\Departamento;
use Illuminate\Http\Request;
use App\Http\Requests\StoreDepartamentoRequest;
use App\Http\Requests\updateDepartamentoRequest;
use App\Services\DepartamentoService;
use App\Http\Resources\Departamento as DepartamentoResource;
use App\Http\Resources\DepartamentoCollection;
use Inertia\Inertia;
use Redirect;



class DepartamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Departamento::class);
        return Inertia::render(
            'Departamentos/ListDepartamentos',
            [
                'departamentos' => new DepartamentoCollection(Departamento::orderBy('id', 'desc')->where('id','>',1)->paginate(config('openlink.perpage'))),
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
        $this->authorize('create', Departamento::class);
        return Inertia::render(
            'Departamentos/CreateDepartamento',
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDepartamentoRequest $request, DepartamentoService $serviceDepartamento)
    {
        $this->authorize('create', Departamento::class);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        $Departamento = $serviceDepartamento->storeDepartamento($request);
        return Redirect::route('admin.departamentos/');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function show(Departamento $departamento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function edit(Departamento $departamento)
    {
        $this->authorize('create', Departamento::class);
        return Inertia::render(
            'Departamentos/EditDepartamento',
            [
                'departamento' => new DepartamentoResource($departamento),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function update(updateDepartamentoRequest $request, Departamento $departamento, DepartamentoService $serviceDepartamento)
    {
        $this->authorize('updatebyUser', Departamento::class);
        $departamento = $serviceDepartamento->updateDepartamento($request, $departamento);
        return Redirect::route('admin.departamentos/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Departamento $departamento)
    {
        //
    }
}
