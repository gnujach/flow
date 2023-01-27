<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Http\Resources\Cliente as ClienteResource;
use App\Http\Resources\ClienteCollection;
use App\Services\ClienteService;
use App\Http\Requests\StoreClienteRequest;
use App\Http\Requests\updateClienteRequest;
use Illuminate\Http\Response;
use Redirect;
use Inertia\Inertia;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Cliente::class);
        return Inertia::render(
            'Clientes/ListClientes',
            [
                'clientes' => new ClienteCollection(Cliente::orderBy('apellido1', 'asc')->paginate(config('openlink.perpage'))),
            ]
        );
        return Redirect::route('admin.clientes/');
    }

    /**
     * Display a listing of the resource by search.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {

        $keyword = $request['term'];
        $result = Cliente::search($keyword)->take(10)->get();
        return response()->json($result, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render(
            'Clientes/CreateCliente',
        );
    }

    /**
     * get the last cliente saved.
     *
     * @return \Illuminate\Http\Response
     */
    public function getlast()
    {
        $this->authorize('create', Cliente::class);
        $cliente = Cliente::latest()->first();
        return response()->json($cliente);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreClienteRequest $request, ClienteService $clienteService)
    {
        $this->authorize('create', Cliente::class);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        $record = $clienteService->storeCliente($request);
        if (request()->has('modal') and $record) {
            return redirect()->back()->banner('Cliente Guardado.')->withInput();
        }
        if (!request()->has('modal') and $record) {
            return Redirect::route('admin.clientes/');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Cliente $cliente
     * @return \Illuminate\Http\Response
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Cliente $cliente
     * @return \Illuminate\Http\Response
     */
    public function updateTel(Request $request, Cliente $cliente, ClienteService $clienteService)
    {
        $this->authorize('updatebyUser', Cliente::class);
        $clienteService->updateClientePhone($request, $cliente);
        return back()->banner('Cliente Actualizado.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Cliente $cliente
     * @return \Illuminate\Http\Response
     */
    public function update(updateClienteRequest $request, Cliente $cliente, ClienteService $clienteService)
    {
        $this->authorize('updatebyUser', Cliente::class);
        $puesto = $clienteService->updateCliente($request, $cliente);
        return Redirect::route('admin.puestos/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Cliente $cliente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cliente $cliente)
    {
        //
    }
}
