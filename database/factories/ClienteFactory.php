<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClienteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'rfc' => strtoupper('AACJ7712212K0'),
            'curp' => strtoupper('AACJ771221HGTABA09'),
            'apellido1' => strtoupper('ABARCA'),
            'apellido2' => strtoupper('chavez'),
            'nombre' => strtoupper('JOSE JULIAN'),
            'cct_id' => 1,
            'interno' => 1,
            'email' => 'j_abarca@seg.guanajuato.gob.mx',
            'telefono' => '4686800608',
            'by' => User::factory()

        ];
    }
}
