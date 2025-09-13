<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Puesto as PuestoResource;
use App\Http\Resources\Departamento as DepartamentoResource;
use App\Http\Resources\Centro as CentroResource;

class User extends JsonResource
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
                'type' => 'user',
                'id' => $this->id,
                'uuid' => $this->uuid,
                'puesto' => new PuestoResource($this->whenLoaded('puesto')),
                'departamento' => new DepartamentoResource($this->whenLoaded('departamento')),
                'centro' => new CentroResource($this->whenLoaded('centro')),
                'attributes' => [
                    'name' => $this->name,
                    'email' => $this->email,
                    'role' => $this->roles->pluck('id'),
                    'activo' => $this->activo,
                    'centro_id' => $this->centro_id,
                    'departamento_id' => $this->departamento_id,
                    'puesto_id' => $this->puesto_id,
                    'created_at' => \Carbon\Carbon::parse($this->created_at)->diffForHumans(),
                    'updated_at' => \Carbon\Carbon::parse($this->updated_at)->diffForHumans(),
                ]
            ],
            'links' => [
                'self' => url('/admin/user/' . $this->id),
            ]
        ];
    }
}
