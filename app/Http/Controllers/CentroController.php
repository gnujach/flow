<?php

namespace App\Http\Controllers;

use App\Models\Centro;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCentroRequest;
use App\Http\Requests\updateCentroRequest;
use App\Services\CentroService;
use App\Http\Resources\Centro as CentroResource;
use App\Http\Resources\CentroCollection;
use Inertia\Inertia;
use Redirect;

class CentroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Centro::class);
        return Inertia::render(
            'Centros/ListCentros',
            [
                'centros' => new CentroCollection(Centro::orderBy('id', 'desc')->paginate(config('openlink.perpage'))),
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
        $this->authorize('create', Centro::class);
        return Inertia::render(
            'Centros/CreateCentro',
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCentroRequest $request, CentroService $serviceCentro)
    {
        $this->authorize('create', Centro::class);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        $centro = $serviceCentro->storeCentro($request);
        return Redirect::route('admin.centros/');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Centro  $centro
     * @return \Illuminate\Http\Response
     */
    public function show(Centro $centro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Centro  $centro
     * @return \Illuminate\Http\Response
     */
    public function edit(Centro $centro)
    {
        $this->authorize('create', Centro::class);
        return Inertia::render(
            'Centros/EditCentro',
            [
                'centro' => new CentroResource($centro),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Centro  $centro
     * @return \Illuminate\Http\Response
     */
    public function update(updateCentroRequest $request, Centro $centro, CentroService $serviceCentro)
    {
        $this->authorize('updatebyUser', Centro::class);
        $centro = $serviceCentro->updateCentro($request, $centro);
        return Redirect::route('admin.centros/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Centro  $centro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Centro $centro)
    {
        //
    }
}
