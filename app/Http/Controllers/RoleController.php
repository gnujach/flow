<?php

namespace App\Http\Controllers;

use Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Http\Resources\Rol as RolResource;
use App\Http\Resources\PermissionsCollection;
use App\Http\Resources\Permissions as PermissionResource;
use App\Http\Resources\RolCollection as RolCollection;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Services\RoleService;
use Redirect;

class RoleController extends Controller
{
    public function index()
    {
//        $this->authorize('viewAny', Rol::class);
        return Inertia\Inertia::render(
            'Roles/ListRoles',
            [
                'roles' => new RolCollection(Role::orderBy('id', 'desc')->with(['permissions'])->paginate(10)),
                // 'roles' => Role::orderBy('id', 'desc')->with(['permissions'])->get()
            ]
        );
    }

    public function create()
    {
//        $this->authorize('create', Rol::class);
        return Inertia\Inertia::render(
            'Roles/CreateRole',
            [
                'permissions' => new PermissionsCollection(Permission::all())
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRoleRequest $request, RoleService $roleService)
    {
//        $this->authorize('create', Rol::class);
        $user = $roleService->storeRole($request);
        return Redirect::route('admin.roles/');
    }

    public function edit(Role $role)
    {
//        $this->authorize('create', Rol::class);
        return Inertia\Inertia::render(
            'Roles/EditRole',
            [
                'permissions' => new PermissionsCollection(Permission::all()),
                'role' => new PermissionResource($role),
                'permisosUsuario' => new PermissionsCollection($role->permissions)
            ]
        );
    }

    /**
     * Update roles
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     * @author @gnujach
     */
    public function update(UpdateRoleRequest $request, Role $role, RoleService $roleService)
    {
//        $this->authorize('create', Rol::class);
        // dd($request->permissions);
        $role = $roleService->updateRole($request, $role);
        return Redirect::route('admin.roles/');
    }
}
