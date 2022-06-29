<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class UpdateUserRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['nullable', 'min:4', 'max:255', Rule::unique('users')->ignoreModel($this->user)],
            'email' => ['nullable', 'email', Rule::unique('users')->ignoreModel($this->user)],
            'activo' => ['nullable', 'boolean'],
            'centro_id' => ['nullable', 'exists:centros,uuid'],
            'departamento_id' => ['nullable', 'exists:departamentos,id'],
            'puesto_id' => ['nullable', 'exists:puestos,id'],
        ];
    }
}
