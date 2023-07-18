<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class SolicitudListCollection extends ResourceCollection
{
    public $collects = SolicitudList::class;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'message'       => 'Todas las solicitudes',
            'solicitudes'     =>  $this->collection,
        ];
    }
}
