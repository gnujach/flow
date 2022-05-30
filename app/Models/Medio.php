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
}
