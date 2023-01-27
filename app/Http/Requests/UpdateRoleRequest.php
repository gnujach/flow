<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'min:3', 'max:12', Rule::unique('roles')->ignoreModel($this->role)],
            'permissions' => ['required'],
            'permissions.*' => ['exists:permissions,name']
        ];
    }
}
