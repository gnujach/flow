<?php

namespace App\Services;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClienteService
{

    public function storeCliente(Request $request)
    {
        $cliente = Cliente::create([
            'rfc' => strtoupper($request->input('rfc')),
            'curp' => strtoupper($request->input('curp')),
            'apellido1' => strtoupper($request->input('apellido1')),
            'apellido2' => strtoupper($request->input('apellido2')),
            'nombre' => strtoupper($request->input('nombre')),
            'cct_id' => strtoupper($request->input('cct_id')),
            'interno' => strtoupper($request->input('interno')),
            'email' => $request->input('email'),
            'telefono' => $request->input('telefono'),
            'by' => Auth::id(),
        ]);
        if ($cliente)
            return $cliente;
        else return null;
    }

    public function updateCliente(Request $request, Cliente $cliente)
    {
        $cliente->update([
            'nombre' => $request->nombre,
        ]);
        return $cliente;
    }

    public function updateClientePhone(Request $request, Cliente $cliente)
    {
        $cliente->update([
            'telefono' => $request->telefono,
        ]);
        return $cliente;
    }
}
