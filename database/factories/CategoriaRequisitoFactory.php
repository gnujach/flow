<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class CategoriaRequisitoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => strtoupper('Requisito Necesario'),
            'activo' => true,
            'by' => User::factory()
        ];
    }

    public function with_user()
    {
        return $this->state(function (array $attributes, User $user) {
            return [
                'by' => $user->id
            ];
        });
    }
}
