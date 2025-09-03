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
        'by',
        'puesto_id'
    ];

    public function setNombreAttribute($value)
    {
        $this->attributes['nombre'] = ucfirst(mb_strtolower(trim($value), 'UTF-8'));
    }
    public function setApellido1Attribute($value)
    {
        $this->attributes['apellido1'] = ucfirst(mb_strtolower(trim($value), 'UTF-8'));
    }
    public function setApellido2Attribute($value)
    {
        $this->attributes['apellido2'] = ucfirst(mb_strtolower(trim($value), 'UTF-8'));
    }
    public function getFullNameAttribute()
    {
        $fullname =  preg_replace('/\s+/', ' ', $this->nombre . " " . $this->apellido1 . " " . $this->apellido2);
        return $fullname;
    }

    protected $appends = ['full_name'];

    /**
     * Un Tramite puede tener muchas tareas
     */
    public function solicitud()
    {
        return $this->hasMany(Solicitud::class);
    }

    public function cct()
    {
        return $this->belongsTo(Cct::class, 'cct_id');
    }

    public function puesto()
    {
        return $this->belongsTo(Puesto::class, 'puesto_id');
    }
}
