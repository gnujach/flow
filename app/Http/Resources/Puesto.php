<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Puesto extends JsonResource
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
                'type' => 'puesto',
                'id' => $this->id,
                'uuid' => $this->uuid,
                'attributes' => [
                    'nombre' => $this->nombre,
                    'activo' => $this->activo,
                ],
                'links' => [
                    'self' => url('/admin/puesto/' . $this->uuid),
                ],
            ]
        ];
    }
}
