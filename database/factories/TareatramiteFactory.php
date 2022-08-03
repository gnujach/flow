<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TareatramiteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => strtoupper('Copia de talón de pago'),
        ];
    }
}
