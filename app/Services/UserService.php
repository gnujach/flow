<?php


namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserService
{
    public function updateUser(Request $request, User $user)
    {
        $request->centro_id = 1;
        $request->departamento_id = 1;
        $request->puesto_id = 1;
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'centro_id' => $request->centro_id,
            'departamento_id' => $request->departamento_id,
            'puesto_id' => $request->puesto_id,
        ]);
    }
    public function updateUserTrabajo(Request $request, User $user)
    {
        $user->update([
            'departamento_id' => $request->departamento_id,
            'puesto_id' => $request->puesto_id,
        ]);
    }
    public function updateRolUser(Request $request, User $user)
    {
        $rol_valido = false;
        $roles = $request->roles_id;
        if (is_array($roles)) {
            foreach ($roles as $rol) {
                $role = Role::find($rol);
                if ($role) {
                    $rol_valido = true;
                }
            }
            $user->syncRoles($roles);
        } else {
            // dd($roles);
            $user->syncRoles($roles);
        }
        // if ($rol_valido)
    }
}
