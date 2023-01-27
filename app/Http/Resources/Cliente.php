<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cliente extends JsonResource
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
                'type' => 'cliente',
                'uuid' => $this->uuid,
                'id' => $this->id,
                'attributes' => [
                    'rfc' => $this->rfc,
                    'curp' => $this->curp,
                    'apellido1' => $this->apellido1,
                    'apellido2' => $this->apellido2,
                    'nombre' => $this->nombre,
                    'email' => $this->email,
                    'telefono' => $this->telefono,
                    'cct_id' => $this->cct_id,
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
