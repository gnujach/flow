<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Rol extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'type' => 'rol',
                'id' => $this->id,
                'attributes' => [
                    'name' => $this->name,
                    'guard_name' => $this->guard_name,
                ],
                'links' => [
                    'self' => url('/admin/rol/' . $this->id),
                ],
            ]
        ];
    }
}
