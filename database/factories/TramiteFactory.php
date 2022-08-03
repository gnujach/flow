<?php

namespace Database\Factories;

use Faker\Guesser\Name;
use Illuminate\Database\Eloquent\Factories\Factory;

class TramiteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => Name::class,
            'objetivo' => Name::class,
            'fundamento_jur' => Name::class,
            'casos' => Name::class,
            'modalidad' => 'presencial',
            'plazo_respuesta' => 1,
            'costo' => 0.0,
            'tipo_usuario' => 'interno',
            'departamento_id' => 1,
            'by' => 1,
            'activo' => true
        ];
    }
}
