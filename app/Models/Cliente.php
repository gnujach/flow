<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use App\Traits\HasUuid;

class Cliente extends Model
{
    use HasFactory, Searchable, HasUuid;

    protected $fillable = [
        'uuid',
        'rfc',
        'curp',
        'apellido1',
        'apellido2',
        'nombre',
        'interno',
        'cct_id',
        'email',
        'telefono',
        'interno',
        'by'
    ];

    /**
     * Un Tramite puede tener muchas tareas
     */
    public function solicitud()
    {
        return $this->hasMany(Solicitud::class);
    }
}
