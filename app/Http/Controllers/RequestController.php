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
        return Inertia::render('Requests/Acceso');
    }
}
