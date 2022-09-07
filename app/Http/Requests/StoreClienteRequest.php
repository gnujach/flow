<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreClienteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // public function authorize()
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => ['required', 'min:4', 'max:44'],
            'email' => ['nullable', 'email', 'max:255', Rule::unique('clientes')],
            'apellido1' => ['required', 'string', 'max:44',],
            'apellido2' => ['nullable', 'string', 'max:44',],
            'telefono' => ['nullable', 'string', 'max:10', 'min:10'],
        ];
    }
}
