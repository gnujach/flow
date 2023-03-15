<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cct;
use Illuminate\Support\Facades\DB;

class CctSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Cct::truncate();
        DB::disableQueryLog();
        $csvFile = fopen(base_path("database/data/Ccts.csv"), "r");
        $firstline = true;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
            if (!$firstline) {
                Cct::create([
                    "Cct" => $data['0'],
                    "nombre_ct" => $data['1'],
                    "clave_turno" => $data['2'],
                    "descripcion_turno" => $data['3'],
                    "zona_escolar" => $data['4'],
                    "sector" => $data['5'],
                    "tipo_escuela" => $data['6'],
                    "multigrado" => $data['7'],
                    "bidocente" => $data['8'],
                    "unitaria" => $data['9'],
                    "domicilio_geografico" => $data['10'],
                    "clave_localidad" => $data['11'],
                    "descripcion_localidad" => $data['12'],
                    "clave_municipio" => $data['13'],
                    "descripcion_municipio" => $data['14'],
                    "nombre_director" => $data['15'],
                    'by' => 1
                ]);
            }
            $firstline = false;
        }
        fclose($csvFile);
    }
}
