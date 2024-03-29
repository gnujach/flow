<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Requisito extends Model
{
    use HasFactory;
    use HasUuid;

    protected $fillable = [
        'nombre',
        'objetivo',
        'activo',
        'uuid',
        'by'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tramites() {
        return $this->belongsToMany(Tramite::class);
    }
}
