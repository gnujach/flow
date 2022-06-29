<?php


namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;

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
}
