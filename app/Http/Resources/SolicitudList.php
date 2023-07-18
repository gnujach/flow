<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\Medio as MedioResource;
use App\Http\Resources\Tramite as TramiteResource;

class SolicitudList extends JsonResource
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
                'id' => $this->id,
                'type' => 'solicitud',
                'user' => new UserResource($this->whenLoaded('user')),
                'medio' => new MedioResource($this->whenLoaded('medio')),
                'tramite' => new TramiteResource($this->whenLoaded('tramite')),
                'attributes' => [
                    'cliente' => $this->cliente_id,
                    'tramite' => $this->tramite_id,
                    'medio' => $this->medio_id,
                    'concluido' => $this->concluido,
                    'diffForHumans' => $this->created_at->diffForHumans(),
                    'created' => $this->created_at->format('d-m-Y'),
                    'nota' => $this->nota,
                ]
            ]
        ];
    }
}
