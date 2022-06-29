<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PuestoCatalogCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public $collects = 'App\Http\Resources\PuestoCatalog';
    public function toArray($request)
    {
        return [
            'message'       => 'Todos los usaurios',
            'data'          => $this->collection
        ];
    }
}
