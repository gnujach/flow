<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;


class Cct extends Model
{
    use HasFactory;
    use HasUuid;
    protected $fillable = [
        'cct',
        'nombre_ct',
        'clave_turno',
        'descripcion_turno',
        'zona_escolar',
        'sector',
        'tipo_escuela',
        'multigrado',
        'bidocente',
        'unitaria',
        'domicilio_geografico',
        'clave_localidad',
        'descripcion_localidad',
        'clave_municipio',
        'descripcion_municipio',
        'nombre_director',
        'uuid',
        'by',
    ];
}
