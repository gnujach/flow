<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Rules\Password;

class StoreUserRequest extends FormRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'min:4', 'max:255', Rule::unique('users')],
            'email' => ['required', 'email', Rule::unique('users')],
            'password' => ['required', 'confirmed', 'string', new Password],
            'departamento_id' => ['exists:departamentos,id'],
            'centro_id' => ['exists:centros,id'],
            'puesto_id' => ['exists:puestos,id'],
            'roles_id' => ['required', 'exists:roles,id'],
            'activo' => ['required', 'boolean'],
        ];
    }
}
