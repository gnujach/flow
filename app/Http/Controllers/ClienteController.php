<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Http\Resources\Cliente as ClienteResource;
use App\Http\Resources\ClienteCollection;
use App\Services\ClienteService;
use App\Http\Requests\StoreClienteRequest;
use App\Http\Requests\updateClienteRequest;
use App\Policies\ClientePolicy;
use App\Models\Cct;
use Illuminate\Support\Facades\DB;
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
                'clientes' => new ClienteCollection(Cliente::orderBy('created_at', 'desc')->with(['cct'])->paginate(config('openlink.perpage'))),
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
            [
                'puestos' => DB::table('puestos')->select('id', 'nombre')->get(),
                'ccts' => Cct::where(['clave_municipio'=> 33])->orderBy('cct', 'asc')->get(),
            ]
        );
    }

    /**
     * Edit a client
     */
    public function edit(Cliente $cliente)
    {
        return Inertia::render(
            'Clientes/EditCliente',
            [
                'cliente' => new ClienteResource($cliente),
                'puestos' => DB::table('puestos')->select('id', 'nombre')->get(),
                'ccts' => Cct::where(['clave_municipio'=> 33])->orderBy('cct', 'asc')->get(),
            ]
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
        $this->authorize('updatebyUser', Cliente::class);
        return Inertia::render('Clientes/ShowCliente', [
            'cliente' => new ClienteResource($cliente->load(['solicitud' => function ($query) {
                $query->latest()->take(5);
            }, 'solicitud.user', 'solicitud.medio', 'solicitud.tramite', 'puesto', 'cct'])),
        ]);
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
        return Redirect::route('admin.clientes/');
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
