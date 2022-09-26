<?php

namespace App\Services;

use App\Models\Historysolicitud;
use App\Models\Solicitud;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class SolicitudService
{
    public function updateSolicitud(Request $request, Solicitud $solicitud)
    {
        DB::beginTransaction();
        try {
            $solicitud->update([
                'concluido' => $request->data['concluido'],
            ]);
            Historysolicitud::create([
                'solicitud_id' => $solicitud->id,
                'task_id' => $request->data['task_id'],
                'by' => Auth::id(),
            ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return $e->getMessage();
        }

    }
}
