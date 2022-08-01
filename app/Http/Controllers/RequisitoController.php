<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequisitoPostRequest;
use App\Http\Requests\RequisitoUpdateRequest;
use App\Http\Resources\RequisitoCollection;
use App\Http\Resources\Requisito as RequisitoResource;
use App\Models\Requisito;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\RequisitoService;
use Redirect;


class RequisitoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Requisito::class);
        return Inertia::render('Requisitos/ListRequisitos', [
            'requisitos' => new RequisitoCollection(Requisito::OrderBy('id', 'desc')->paginate(config('openlink.perpage'))),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render(
            'Requisitos/CreateRequisito',
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(RequisitoPostRequest $request, RequisitoService $requisitoService)
    {
        $this->authorize('create', Requisito::class);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        $requisito = $requisitoService->storeRequisito($request);
        return Redirect::route('admin.requisitos/')->banner('Requisito Guardado.');

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Requisito $requisito
     * @return \Illuminate\Http\Response
     */
    public function show(Requisito $requisito)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Requisito $requisito
     * @return \Illuminate\Http\Response
     */
    public function edit(Requisito $requisito)
    {
        $this->authorize('create', Requisito::class);
        return Inertia::render(
            'Requisitos/EditRequisito',
            [
                'requisito' => new RequisitoResource($requisito),
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Requisito $requisito
     * @return \Illuminate\Http\Response
     */
    public function update(RequisitoUpdateRequest $request, Requisito $requisito, RequisitoService $requisitoService)
    {
        $requisito = $requisitoService->updateRequisito($request, $requisito);
        return Redirect::route('admin.requisitos/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Requisito $requisito
     * @return \Illuminate\Http\Response
     */
    public function destroy(Requisito $requisito)
    {
        //
    }
}
