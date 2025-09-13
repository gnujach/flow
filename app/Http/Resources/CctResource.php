<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CctResource extends JsonResource
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
                'type' => 'cct',
                'id' => $this->id,
                'attributes' => [
                    'nombre_ct' => $this->nombre_ct,
                    'cct' => $this->cct,
                    'descripcion_localidad' => $this->descripcion_localidad,
                    'descripcion_municipio' => $this->descripcion_municipio,
                    'zona' => $this->zona_escolar,
                ],
            ]
        ];
    }
}