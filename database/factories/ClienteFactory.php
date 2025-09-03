<?php

namespace Database\Factories;

use App\Models\Puesto;
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
            'rfc' => 'AACJ7712212K0',
            'curp' => 'AACJ771221HGTABA09',
            'apellido1' => 'ABARCA',
            'apellido2' => 'chavez',
            'nombre' => 'JOSE JULIAN',
            'cct_id' => 1,
            'interno' => 1,
            'email' => 'j_abarca@seg.guanajuato.gob.mx',
            'telefono' => '4686800608',
            'puesto_id' => Puesto::factory(),
            'by' => User::factory()
        ];
    }
}
