<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\User as UsuarioResource;
use App\Http\Resources\UserCollection as UserCollection;
use App\Http\Resources\Rol as RolResource;
use App\Http\Resources\RolCollection as RolCollection;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UpdateRolRequest;
use App\Http\Requests\StoreCtUserRequest;
use App\Services\UserService;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
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
                'users' => new UserCollection(User::where('id', '>', 1)->orderBy('id', 'desc')->with(['puesto', 'centro', 'departamento'])->paginate(config('openlink.perpage'))),
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
        $this->authorize('updatebyUser', User::class);
        return Inertia\Inertia::render(
            'Users/CreateUser',
            [
                'departamentos' => DB::table('departamentos')->where('activo', true)->select('id', 'nombre')->get(),
                'puestos' => DB::table('puestos')->where('activo', true)->select('id', 'nombre')->get(),
                'roles' => DB::table('roles')->select('id', 'name AS nombre')->get(),
                'centros' => DB::table('centros')->select('id', 'nombre')->get(),
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request, UserService $userService)
    {
        $this->authorize('updatebyUser', User::class);
        $user = $userService->storeUser($request);
        return Redirect::route('admin.usuarios/');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $uuid
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
                'centros' => DB::table('centros')->where('activo', true)->select('id', 'nombre')->get(),
                'puestos' => DB::table('puestos')->where('activo', true)->select('id', 'nombre')->get(),
                'roles' => DB::table('roles')->select('id', 'name AS nombre')->get(),
                'rolesUsario' => $user->getRoleNames()
            ]
        );
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
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
        echo "Hola";
        dd($request);
        $this->authorize('updatebyUser', User::class);
        $user = $userService->updateUserTrabajo($request, $user);
        return Redirect::route('admin.usuarios/');
    }

    public function updatect(Request $request, User $user, UserService $userService)
    {
        $this->authorize('updatebyUser', User::class);
        $user = $userService->updateUserTrabajo($request, $user);
        return Redirect::route('admin.usuarios/');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    //Show roles
    public function showroles(Request $request)
    {
        $this->authorize('updatebyUser', User::class);
        $all_roles_in_database = Role::all();
        return $all_roles_in_database;
        return RolResource::collection($all_roles_in_database);
    }

    /**
     * Update roles
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     * @author @gnujach
     */
    public function updateRoles(UpdateRolRequest $request, User $user, UserService $userService)
    {
        $this->authorize('updatebyUser', User::class);
        $user = $userService->updateRolUser($request, $user);
        return Redirect::route('admin.usuarios/');
    }
}
