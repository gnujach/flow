<?php

namespace App\Traits;

use Illuminate\Support\Str;
use App\Exceptions;

trait HasUuid
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            try {
                $model->uuid = Str::uuid();
            } catch (Exception $e) {
                abort(500, $e->getMessage());
            }
        });
    }
}
