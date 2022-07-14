<?php

namespace App\Services;


use App\Models\Requisito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequisitoService
{
    public function storeRequisito(Request $request) {
        return $requisito = Requisito::create([
            'nombre' => strtoupper($request->input('nombre')),
            'objetivo' => strtoupper($request->input('objetivo')),
            'by' => Auth::id(),
        ]);
    }

    public function updateRequisito(Request $request, Requisito  $requisito)
    {
        $requisito->update([
            'nombre' => $request->nombre,
            'objetivo' => $request->objetivo,
            'activo' => $request->activo,
        ]);
        return $requisito;
    }
}
