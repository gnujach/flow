<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Paciente extends JsonResource
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
                'type' => 'paciente',
                'uuid' => $this->uuid,
                'id' => $this->id,
                // 'empresa' => new EmpresaResource($this->whenLoaded('empresa')),
                // 'servicios' => new ServicioCollection($this->whenLoaded('servicios')),
                // 'empresa' => new EmpresaResource($this->loadMissing('empresa')), //Carga la relacion si es que no viene en el modelo

                'attributes' => [
                    'name' => $this->name,
                    'ap1' => $this->ap1,
                    'ap2' => $this->ap2,
                    'email' => $this->email,
                    'created_at' => \Carbon\Carbon::parse($this->created_at)->diffForHumans(),
                    'updated_at' => \Carbon\Carbon::parse($this->updated_at)->diffForHumans(),
                ]
            ],
            'links' => [
                'self' => url('/admin/paciente/' . $this->id),
            ]
        ];
    }
}
