<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaRequisito as ResourcesCategoriaRequisito;
use App\Models\CategoriaRequisito;
use App\Policies\CategoriaRequisitoPolicy;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class CategoriaRequisitoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // dd($this->authorize(CategoriaRequisito::class));
        $this->authorize(CategoriaRequisito::class);
        return response()->json('Hello', 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('create', CategoriaRequisito::class);
        request()->validate([
            'nombre' => ['required', 'min:4', 'max:35', Rule::unique('categoria_requisitos')],
        ]);

        $cat = CategoriaRequisito::create([
            'nombre' => strtoupper($request->input('nombre')),
            'by' => Auth::id(),
        ]);

        return response()->json($cat, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Http\Response
     */
    public function show(CategoriaRequisito $categoriaRequisito)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoriaRequisito $categoriaRequisito)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoriaRequisito $categoriaRequisito)
    {
        $this->authorize('updatebyUser', CategoriaRequisito::class);
        request()->validate([
            'nombre' => ['required', 'min:4', 'max:255', Rule::unique('categoria_requisitos')->ignore($categoriaRequisito->id)],
        ]);
        $cat = $categoriaRequisito->update([
            'nombre' => strtoupper($request['nombre']),
            'activo' => $request['activo'] ? true : false,
            'by' => Auth::id(),
        ]);
        $data = ['message' => 'Todo has been updated', 'cat' => $cat];
        return response()->json($data, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Http\Response
     */
    public function destroy($uuid)
    {
        // dd(request()->uuid);
        $categoriaRequisito = CategoriaRequisito::where('uuid', request()->uuid)->firstOrFail();
        if ($categoriaRequisito->delete()) {
            $data = ['message' => 'Model had deleted'];
            return response()->json($data, 201);
        }
        return response()->json('error', 403);
    }
    public function destroy1(CategoriaRequisito $categoriaRequisito)
    {
        if ($categoriaRequisito->delete()) {
            $data = ['message' => 'Model had deleted'];
            return response()->json($data, 201);
        }
        return response()->json('error', 403);
    }
}
