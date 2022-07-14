<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RequisitoFactory extends Factory
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
                'objetivo' => strtoupper('Comprobar que el servidor publico se encuentra activo'),
                'activo' => true,
                'by' => User::factory()
            ];
    }
}
