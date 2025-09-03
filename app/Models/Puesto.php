<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Puesto extends Model
{
    use HasFactory;
    use HasUuid;
    protected $fillable = [
        'nombre',
        'activo',
        'uuid',
        'by'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
    public function cliente()
    {
        return $this->hasMany(Cliente::class);
    }
}
