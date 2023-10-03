<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Redirect;

class RequestController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CCT  $cCT
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
    }

    public function login(Request $request)
    {
        $email = $request->email;
        $folio = substr($request->folio, 5);
        $solicitud = Solicitud::where('id', $folio)
            ->whereHas('cliente', function ($query) use ($email) {
                $query->where('email', $email);
            })->firstOrFail();
        return Inertia::render('Requests/Acceso', [
            'solicitud' => $solicitud
        ]);
    }
}
