<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // public function authorize()
    // {
    //     return $this->user()->hasRole('Admin');
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'centro_id' => ['nullable', 'exists:centros,uuid'],
            'departamento_id' => ['nullable', 'exists:departamentos,uuid'],
            'puesto_id' => ['nullable', 'exists:puestos,uuid'],
        ];
    }
}
