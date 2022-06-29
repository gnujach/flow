<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\User as UsuarioResource;
use App\Http\Resources\UserCollection as UserCollection;
use App\Http\Requests\UpdateUserRequest;
use App\Services\UserService;
use Illuminate\Support\Facades\DB;
use Redirect;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', User::class);
        return Inertia\Inertia::render(
            'Users/ListUsers',
            [
                'users' => new UserCollection(User::orderBy('id', 'desc')->with(['puesto', 'centro', 'departamento'])->paginate(config('openlink.perpage'))),
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $uuid
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $this->authorize('updatebyUser', User::class);
        return Inertia\Inertia::render(
            'Users/EditUser',
            [
                'user' => new UsuarioResource($user),
                'departamentos' => DB::table('departamentos')->where('activo', true)->select('id', 'nombre')->get(),
                'puestos' => DB::table('puestos')->where('activo', true)->select('id', 'nombre')->get()
            ]
        );
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user, UserService $userService)
    {
        $this->authorize('updatebyUser', User::class);
        $user = $userService->updateUser($request, $user);
        return Redirect::route('admin.usuarios/');
    }
    public function updateTrabajo(UpdateUserRequest $request, User $user, UserService $userService)
    {
        $this->authorize('updatebyUser', User::class);
        $user = $userService->updateUserTrabajo($request, $user);
        return Redirect::route('admin.usuarios/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
