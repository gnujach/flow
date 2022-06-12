<?php

namespace App\Services;

use App\Models\Puesto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PuestoService
{
    public function storePuesto(Request $request)
    {
        return $puesto = Puesto::create([
            'nombre' => strtoupper($request->input('nombre')),
            'by' => Auth::id(),
        ]);
    }

    public function updatePuesto(Request $request, Puesto $puesto)
    {
        $puesto->update([
            'nombre' => $request->nombre,
            'activo' => $request->activo,
        ]);
        return $puesto;
    }
}
