<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Departamento as DepartamentoResource;
use App\Http\Resources\RequisitoListCollection;

class Tramite extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'type' => 'tramite',
                'id' => $this->id,
                'uuid' => $this->uuid,
                'departamento' => new DepartamentoResource($this->whenLoaded('departamento')),
                'requisitos' => new RequisitoListCollection($this->whenLoaded('requisitos')),
                'attributes' => [
                    'nombre' => $this->nombre,
                    'objetivo' => $this->objetivo,
                    'fundamento_jur' => $this->fundamento_jur,
                    'casos' => $this->casos,
                    'modalidad' => $this->modalidad,
                    'plazo_respuesta' => $this->plazo_respuesta,
                    'costo' => $this->costo,
                    'tipo_usuario' => $this->tipo_usuario,
                    'activo' => $this->activo,
                    'updated' => $this->updated_at->format('d-m-Y'),
                ],
                'links' => [
                    'self' => url('/admin/tramite/' . $this->uuid),
                ],
            ]
        ];
    }
}
