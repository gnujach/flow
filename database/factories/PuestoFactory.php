<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class PuestoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => strtoupper('Subjefe de Informatica'),
            'activo' => true,
            'by' => User::factory()
        ];
    }
}
