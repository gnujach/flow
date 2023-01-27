<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCtUserRequest extends FormRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'centro_id' => ['required', 'exists:centros,uuid'],
            'departamento_id' => ['required', 'exists:departamentos,id'],
            'puesto_id' => ['required', 'exists:puestos,id'],
        ];
    }
}
