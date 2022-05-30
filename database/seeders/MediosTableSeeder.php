<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Medio;

class MediosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Medio::create([
            'nombre' => 'Presencial',
            'by' => 1
        ]);
        Medio::create([
            'nombre' => 'Teléfono',
            'by' => 1
        ]);
        Medio::create([
            'nombre' => 'Correo Electrónico',
            'by' => 1
        ]);
        Medio::create([
            'nombre' => 'Redes Sociales',
            'by' => 1
        ]);
    }
}
