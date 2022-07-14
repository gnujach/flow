<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Requisito extends JsonResource
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
                'type' => 'requisito',
                'id' => $this->id,
                'uuid' => $this->uuid,
                'attributes' => [
                    'nombre' => $this->nombre,
                    'objetivo' => $this->objetivo,
                    'activo' => $this->activo,
                ],
                'links' => [
                    'self' => url('/admin/requisito/' . $this->uuid),
                ],
            ]
        ];
    }
}
