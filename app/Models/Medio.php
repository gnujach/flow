<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Medio extends Model
{
    use HasFactory;
    use HasUuid;

    protected $fillable = [
        'nombre',
        'activo',
        'uuid',
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
