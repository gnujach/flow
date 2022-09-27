<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClienteCollection;
use Illuminate\Http\Request;
use App\Models\Solicitud;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
//        $this->authorize('viewAny', Cliente::class);

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
            ->whereYear('created_at', date('Y'))
            ->where('concluido', true)
            ->selectRaw('month(created_at) as month')
            ->selectRaw('count(*) as count')
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('count', 'month')
            ->values()
            ->toArray();

//        dd($thisYearRequests);


        return Inertia::render(
            'Dashboard', [
                'dataset' => $thisYearRequests,
                'concluidas' => $thisYearRequestsCompleted
            ]
        );
    }
}
