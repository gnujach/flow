<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
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

//    protected $with = ['cliente', 'historysolicitud', 'tramite', 'medio'];
    protected static function booted()
    {
        static::addGlobalScope('withmodel', function (Builder $builder) {
            $builder->with('cliente', 'historysolicitud', 'tramite', 'tramite.tareastramite', 'medio');
        });
    }

    /**
     * Una solicitud puede tener muchas historysolicitud
     */
    public function historysolicitud(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Historysolicitud::class);
    }

    /**
     * Una solicitud pertenece a un usuario
     */
    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Una solicitud pertenece a un tramite
     */
    public function tramite(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Tramite::class);
    }

    /**
     * Una solicitud pertenece a un medio
     */
    public function medio(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Medio::class);
    }

    /**
     * Una solicitud pertenece a un tramite
     */
    public function cliente(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Cliente::class);
    }

    /** load all relations */

}
