<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Paciente extends Model
{
    use HasFactory, Searchable;
    protected $fillable = [
        'name',
        'ap1',
        'ap2',
        'email',
    ];
}
