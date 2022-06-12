<?php


namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;

class UserService
{
    public function updateUser(Request $request, User $user)
    {
        $user->update([
            'centro_id' => $request->centro_id,
            'departamento_id' => $request->departamento_id,
            'puesto_id' => $request->puesto_id,
        ]);
    }
}
