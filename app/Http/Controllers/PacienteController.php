<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Http\Resources\PacienteCollection;
use App\Http\Resources\Paciente as PacienteResource;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Inertia;
use Illuminate\Support\Facades\Validator;
use Redirect;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {

        $keyword = $request['term'];
        $result = Paciente::search($keyword)->take(10)->get();
        return response()->json($result, 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia\Inertia::render(
            'Pacientes/ListPacientes',
            [
                'pacientes' => new PacienteCollection(Paciente::orderBy('id', 'desc')->paginate(config('openlink.perpage'))),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia\Inertia::render(
            'Pacientes/CreatePaciente',
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validator::make($request->all(), [
        //     'name' => ['required', 'min:4', 'max:255'],
        //     'email' => ['required', 'email', 'max:255', Rule::unique('pacientes')],
        //     'ap1' => ['required', 'string', 'max:255',],
        //     'ap2' => ['nullable', 'string', 'max:255',],
        // ])->validateWithBag('savePacienteInformation');
        // dd(request()->all());

        request()->validate([
            'name' => ['required', 'min:4', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('pacientes')],
            'ap1' => ['required', 'string', 'max:255',],
            'ap2' => ['nullable', 'string', 'max:255',],
        ]);
        if (request()->has('prevalidate')) {
            return redirect()->back();
        }
        Paciente::create([
            'name' => $request->input('name'),
            'ap1' => $request->input('ap1'),
            'ap2' => $request->input('ap2'),
            'email' => $request->input('email'),
        ]);
        if (request()->has('modal')) {
            return redirect()->back();
        }
        return Redirect::route('admin.pacientes/');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function show(Paciente $paciente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function edit(Paciente $paciente)
    {
        return Inertia\Inertia::render(
            'Pacientes/CreatePaciente',
            ['paciente' => new EstudioResource($paciente)],
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Paciente $paciente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Paciente $paciente)
    {
        //
    }
}
