<?php

namespace Database\Seeders;

use \App\Models\Puesto;

use Illuminate\Database\Seeder;

class PuestoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Puesto::create([
            'nombre' => 'Subjefe de Informática',
            'by' => 1
        ]);
    }
}
