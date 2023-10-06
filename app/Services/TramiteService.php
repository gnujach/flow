<?php

namespace App\Services;

use App\Models\Tramite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TramiteService
{
    public function updateTramite(Request $request, Tramite $tramite)
    {
        $tramite->update([
            'nombre' => strtoupper($request->input('nombre')),
            'objetivo' => strtoupper($request->objetivo),
            'fundamento_jur' => strtoupper($request->fundamento_jur),
            // 'casos' => strtoupper($request->casos),
            'modalidad' => $request->modalidad,
            'plazo_respuesta' => $request->plazo_respuesta,
            'costo' => $request->costo,
            'tipo_usuario' => $request->tipo_usuario_id,
            'activo' => $request->activo,
            'url_proceso' => $request->url_proceso,
            'departamento_id' => $request->departamento_id,
            'tipo_usuario' => $request->tipo_usuario,
            'by' => Auth::id(),
        ]);
        if ($request->has('requisitos')) {
            //            dd('Llegamos aqui');
            $tramite->requisitos()->sync($request['requisitos']);
        }
        return $tramite;
    }
}
