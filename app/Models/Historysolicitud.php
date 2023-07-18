<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historysolicitud extends Model
{
    use HasFactory;

    protected $fillable = [
        'by',
        'solicitud_id',
        'task_id',
        // 'notes'
    ];

    /**
     * Una Historysolicitud pertenece a una solicitud
     */
    public function solicitud()
    {
        return $this->belongsTo(Solicitud::class);
    }
}
