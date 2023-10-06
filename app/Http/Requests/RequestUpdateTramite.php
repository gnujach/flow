<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RequestUpdateTramite extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => ['required', 'min:4', 'max:120', Rule::unique('tramites')->ignoreModel($this->tramite)],
            'objetivo' => ['required', 'min:4', 'max:120', Rule::unique('tramites')->ignoreModel($this->tramite)],
            'plazo_respuesta' => ['required', 'min:1', 'max:3'],
            'departamento_id' => ['required', 'exists:departamentos,id'],
            'url_proceso' => ['nullable', 'url'],
            'activo' => ['nullable', 'boolean'],
        ];
    }
}
