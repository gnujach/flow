<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Departamento;

class DepartamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Departamento::create([
            'nombre' => 'Sin Departamento',
            'by' => 1
        ]);
        Departamento::create([
            'nombre' => 'Subjefatura de Informática',
            'by' => 1
        ]);
    }
}
