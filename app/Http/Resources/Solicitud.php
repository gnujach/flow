<?php

namespace App\Http\Resources;

use App\Http\Resources\Medio as MedioResource;
use App\Http\Resources\Cliente as ClienteResource;
use App\Http\Resources\Tramite as TramiteResource;
use App\Http\Resources\Centro as CentroResource;
use App\Http\Resources\User as UserResource;

use Illuminate\Http\Resources\Json\JsonResource;

class Solicitud extends JsonResource
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
                'type' => 'solicitud',
                'id' => $this->id,
                'uuid' => $this->uuid,
                'user' => new UserResource($this->whenLoaded('user')),
                'medio' => new MedioResource($this->whenLoaded('medio')),
                'tramite' => new TramiteResource($this->whenLoaded('tramite')),
                'cliente' => new ClienteResource($this->whenLoaded('cliente')),
                'centro' => new CentroResource($this->whenLoaded('centro')),
                'attributes' => [
                    'cliente' => $this->cliente_id,
                    'tramite' => $this->tramite_id,
                    'medio' => $this->medio_id,
                    'concluido' => $this->concluido,
                ],
                'links' => [
                    'self' => url('/solicitudes/' . $this->uuid),
                ],
            ]
        ];
    }
}
