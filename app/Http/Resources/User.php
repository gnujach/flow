<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
                'attributes' => [
                    'name' => $this->name,
                    'email' => $this->email,
                    'role' => $this->role,
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
