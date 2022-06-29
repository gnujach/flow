<?php

namespace App\Services;

use App\Models\Centro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CentroService
{
    public function storeCentro(Request $request)
    {
        return $departamento = Centro::create([
            'nombre' => strtoupper($request->input('nombre')),
            'by' => Auth::id(),
        ]);
    }


    public function updateCentro(Request $request, Centro $centro)
    {
        $centro->update([
            'nombre' => $request->nombre,
            'activo' => $request->activo,
        ]);
        return $centro;
    }
}
