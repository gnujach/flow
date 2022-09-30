<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClienteCollection;
use Illuminate\Http\Request;
use App\Models\Solicitud;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
//        $this->authorize('viewAny', Cliente::class);
        $now = Carbon::now();
        $weekStartDate = $now->startOfWeek()->format('Y-m-d H:i');
        $weekEndDate = $now->endOfWeek()->format('Y-m-d H:i');


        $thisYearRequests = Solicitud::query()
            ->whereYear('created_at', date('Y'))
            ->selectRaw('month(created_at) as month')
            ->selectRaw('count(*) as count')
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('count', 'month')
            ->values()
            ->toArray();

        $thisYearRequestsCompleted = Solicitud::query()
            ->whereYear('solicituds.created_at', date('Y'))
            ->where('solicituds.concluido', true)
            ->selectRaw('month(solicituds.created_at) as month')
            ->selectRaw('count(*) as count')
            ->groupBy('month')
            ->orderBy('month')
            ->withoutGlobalScope('withmodel')
            ->pluck('count', 'month')
            ->values()
            ->toArray();

//        dd($thisYearRequestsCompleted);


        $thisYearByTramite = Solicitud::
        query()
            ->selectRaw('count(*) as total')
            ->selectRaw('tramites.nombre as tramite')
            ->join('tramites', 'solicituds.tramite_id', '=', 'tramites.id')
            ->orderBy('solicituds.tramite_id')
            ->groupBy('solicituds.tramite_id')
            ->withoutGlobalScope('withmodel')
//            ->pluck('total')
            ->get();
//            ->values()
//            ->toArray();
//        dd($thisYearByTramite);

        $thisToday = Solicitud::query()
            ->selectRaw('count(*) as total')
            ->whereRaw('Date(created_at) = CURDATE()')
            ->withoutGlobalScope('withmodel')
            ->get();

        $thisWeek = Solicitud::query()
            ->selectRaw('count(*) as total')
            ->whereRaw("(created_at >= ? AND created_at <= ?)",
                [$weekStartDate, $weekEndDate])
            ->whereBetween('created_at', [$weekStartDate, $weekEndDate])
            ->get();


        return Inertia::render(
            'Dashboard', [
                'dataset' => $thisYearRequests,
                'concluidas' => $thisYearRequestsCompleted,
                'byTramite' => $thisYearByTramite,
                'today' => $thisToday,
                'week' => $thisWeek,
            ]
        );
    }
}
