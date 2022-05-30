<?php

namespace App\Http\Controllers;

use App\Models\Medio;
use Illuminate\Http\Request;
use App\Http\Resources\MedioCollection;
use App\Http\Resources\Medio as MedioResource;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Inertia;
use Redirect;

class MedioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia\Inertia::render(
            'Medios/ListMedios',
            [
                'medios' => new MedioCollection(Medio::orderBy('id', 'desc')->paginate(config('openlink.perpage'))),
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
        return Inertia\Inertia::render(
            'Medios/CreateMedio',
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'nombre' => ['required', 'min:4', 'max:255', Rule::unique('medios')],
        ]);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        Medio::create([
            'nombre' => $request->input('nombre'),
            'by' => Auth::id(),
        ]);
        return Redirect::route('admin.medios/');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medios  $medios
     * @return \Illuminate\Http\Response
     */
    public function show(Medio $medios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Medio  $medio
     * @return \Illuminate\Http\Response
     */
    public function edit(Medio $medio)
    {
        // die($medio);
        return Inertia\Inertia::render(
            'Medios/EditMedio',
            [
                'medio' => new MedioResource($medio),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medios  $medios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Medio $medio)
    {
        request()->validate([
            'nombre' => ['required', 'min:4', 'max:255', Rule::unique('medios')->ignore($medio->id)],
            'activo' => ['required', 'boolean'],
        ]);
        // die($request->activo);
        $medio->forceFill([
            'nombre' => strtoupper($request['nombre']),
            'activo' => $request['activo'] ? true : false,
            'by' => Auth::id(),
        ])->save();
        return Redirect::route('admin.medios/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medios  $medios
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medios $medios)
    {
        //
    }
}
