<?php


namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserService
{
    public function updateUser(Request $request, User $user)
    {
        if (!empty($request->password))
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'activo' => $request->activo,
                'password' => Hash::make($request->password),
            ]);
        else {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'activo' => $request->activo,
            ]);
        }
    }

    public function updateUserTrabajo(Request $request, User $user)
    {
        $user->update([
            'departamento_id' => $request->departamento_id,
            'puesto_id' => $request->puesto_id,
            'centro_id' => $request->centro_id,

        ]);
    }

    public function updateRolUser(Request $request, User $user)
    {
        $rol_valido = false;
        $roles = $request->roles_id;
        $user->syncRoles($roles);
        // if (is_array($roles)) {
        //     foreach ($roles as $rol) {
        //         $role = Role::find($rol);
        //         if ($role) {
        //             $rol_valido = true;
        //         }
        //     }
        //     $user->syncRoles($roles);
        // } else {
        //     // dd($roles);
        //     $user->syncRoles($roles);
        // }
        // if ($rol_valido)
    }

    public function storeUser(Request $request)
    {
        $user = User::create([
            'name' => strtoupper($request->input('name')),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'departamento_id' => $request->input('departamento_id'),
            'puesto_id' => $request->input('puesto_id'),
            'centro_id' => $request->input('centro_id'),
            'activo' => $request->input('activo'),
        ]);
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
        return $user;
        // if ($rol_valido)
    }
}
