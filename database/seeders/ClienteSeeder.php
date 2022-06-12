<?php

namespace Database\Seeders;

use App\Models\Cliente;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Services\readLargeCSVService;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * funciona

    public function run()
    {
        Cliente::truncate();
        DB::disableQueryLog();
        $csvFile = fopen(base_path("database/data/clientes_csv.csv"), "r");
        $firstline = true;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
            if (!$firstline) {
                Cliente::create([
                    "rfc" => $data['0'],
                    "curp" => $data['1'],
                    "apellido1" => $data['2'],
                    "apellido2" => $data['3'],
                    "nombre" => $data['4'],
                    "cct_id" => 1,
                    "interno" => 1,
                    "email" => '',
                    "telefono" => '',
                    'by' => 1
                ]);
            }
            $firstline = false;
        }
    }
     */
    public function run()
    {
        $file = database_path("data/clientes_csv.csv");
        $csv_reader = new readLargeCSVService($file, ",");
        $cur_time = now();
        Cliente::truncate();
        DB::disableQueryLog();
        foreach ($csv_reader->csvToArray() as $data) {
            // Preprocessing of the array.
            foreach ($data as $key => $entry) {
                // Laravel doesn't add timestamps on its own when inserting in chunks.
                // $data[$key]['created_at'] = $cur_time;
                // $data[$key]['updated_at'] = $cur_time;
                // dd($entry[0]);
                Cliente::create([
                    "rfc" => $entry['curp'],
                    "curp" => $entry['curp'],
                    "apellido1" => $entry['apellido1'],
                    "apellido2" => $entry['apellido2'],
                    "nombre" => $entry['nombre'],
                    "cct_id" => $entry['cct_id'],
                    "interno" => 1,
                    "email" => $entry['email'],
                    "telefono" => $entry['telefono'],
                    'by' => 1
                ]);
            }
            // Cliente::insert($data);
            // dd($data);
            // exit;
            // dd($data);
            // dd($data[0]['curp']);
        }
    }
}
