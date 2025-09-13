<?php

namespace App\Exports;

use App\Models\Solicitud;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SolicitudsExport implements FromQuery, WithMapping, WithHeadings
{
    use exportable;

    public function map($solicitud): array
    {
        return [
            $solicitud->id,
            $solicitud->cliente->full_name,
            $solicitud->cliente->email,
            $solicitud->cliente->telefono,
            $solicitud->tramite->nombre,
            $solicitud->user->name,
            $solicitud->concluido == 1 ? 'Si' : 'No',
            $solicitud->tramite->departamento->nombre,
            $solicitud->medio->nombre,
            $solicitud->centro->nombre,
            $solicitud->created_at,
        ];
    }

    public function query()
    {
        // return Solicitud->whereYear('created_at', 2023);
        if (auth()->user()->centro_id == 1) {
            return Solicitud::query()->whereYear('created_at', date('Y') )
            ->orderBy('solicituds.id', 'desc');
        }
        return Solicitud::query()->whereYear('created_at', date('Y') )
            ->where('centro_id', auth()->user()->centro_id)
            ->orderBy('solicituds.id', 'desc');
    }

    public function headings(): array
    {
        return [
            'id',
            'Ciudadano (a)',
            'email',
            'telefono',
            'Tramite',
            'Atendió',
            'Concluido',
            'Departamento',
            'Medio',
            'Centro',
            'fecha de inicio'
        ];
    }
}
