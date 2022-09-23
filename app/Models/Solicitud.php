<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Solicitud extends Model
{
    use HasFactory;

//        use HasUuid;

    protected $fillable = [
        'by',
        'cliente_id',
        'tramite_id',
        'medio_id',
        'modified_by',
        'concluido',
    ];

    /**
     * Una solicitud puede tener muchas historysolicitud
     */
    public function historysolicitud()
    {
        return $this->hasMany(Historysolicitud::class);
    }

    /**
     * Una solicitud pertenece a un usuario
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Una solicitud pertenece a un tramite
     */
    public function tramite()
    {
        return $this->belongsTo(Tramite::class);
    }

    /**
     * Una solicitud pertenece a un medio
     */
    public function medio()
    {
        return $this->belongsTo(Medio::class);
    }

    /**
     * Una solicitud pertenece a un tramite
     */
    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }

}
