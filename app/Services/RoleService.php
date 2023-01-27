<?php


namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class RoleService
{
    public function storeRole(Request $request)
    {
        $role = Role::create([
            'name' => $request->input('name'),
            'guard_name' => 'web'
        ]);
        $permissions = $request->permissions;
        $role->syncPermissions($permissions);
        // if (is_array($permissions)) {
        //     foreach ($permissions as $permission) {
        //         $role->givePermissionTo($permission);
        //     }
        // }
        return $role;
    }

    public function updateRole(Request $request, Role $role)
    {
        $role->update([
            'name' => $request->name,
            'guard_name' => 'web'
        ]);
        $permissions = $request->permissions;
        $role->syncPermissions($permissions);
    }
}
