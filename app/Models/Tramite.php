<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Tramite extends Model
{
    use HasFactory;
    use HasUuid;

    protected $fillable = [
        'nombre',
        'objetivo',
        'fundamento_jur',
        'casos',
        'modalidad',
        'plazo_respuesta',
        'costo',
        'tipo_usuario',
        'activo',
        'url_proceso',
        'departamento_id',
        'uuid',
        'by',
//        'cliente_id'
    ];

    /**
     * Un tramite puede tener muchos requisitos
     */
    public function requisitos(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Requisito::class);
    }

    /**
     * Un Tramite puede tener muchas tareas
     */
    public function Tareastramite()
    {
        return $this->hasMany(Tareatramite::class);
    }

}
