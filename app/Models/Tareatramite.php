<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Tareatramite extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = [
        'tramite_id',
        'nombre'
    ];

    public function Tramite()
    {
        return $this->hasOne(Tramite::class);
    }
}
