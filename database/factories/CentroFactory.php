<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class CentroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => strtoupper('Unidad de Servicios de Apoyo a la Educación San José Ituride'),
            'activo' => true,
            'by' => User::factory()
        ];
    }
}
