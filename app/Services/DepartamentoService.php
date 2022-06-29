<?php

namespace App\Services;

use App\Models\Departamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DepartamentoService
{
    public function storeDepartamento(Request $request)
    {
        return $departamento = Departamento::create([
            'nombre' => strtoupper($request->input('nombre')),
            'by' => Auth::id(),
        ]);
    }

    public function updateDepartamento(Request $request, Departamento $departamento)
    {

        $departamento->update([
            'nombre' => $request->nombre,
            'activo' => $request->activo,
        ]);
        // return $p;
    }
}
