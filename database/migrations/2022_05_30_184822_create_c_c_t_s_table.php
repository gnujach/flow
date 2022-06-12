<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCctsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ccts', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->index()->unique();
            $table->string('cct')->nullable(false);
            $table->string('nombre_ct')->nullable(false);
            $table->string('clave_turno')->nullable(false);
            $table->string('descripcion_turno')->nullable(false);
            $table->string('zona_escolar')->nullable(false);
            $table->string('sector')->nullable(false);
            $table->string('tipo_escuela')->nullable(false);
            $table->boolean('multigrado')->default(false);
            $table->boolean('bidocente')->default(false);
            $table->boolean('unitaria')->default(false);
            $table->string('domicilio_geografico')->nullable(false);
            $table->string('clave_localidad')->nullable(false);
            $table->string('descripcion_localidad')->nullable(false);
            $table->string('clave_municipio')->nullable(false);
            $table->string('descripcion_municipio')->nullable(false);
            $table->string('nombre_director')->nullable(false);
            $table->BigInteger('by')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ccts');
    }
}
