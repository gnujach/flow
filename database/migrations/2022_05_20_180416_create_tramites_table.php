<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTramitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tramites', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->index()->unique();
            $table->string('nombre', 200)->nullable(false);
            $table->string('objetivo', 200)->nullable(true);
            $table->string('fundamento_jur', 200)->nullable(true);
            $table->string('casos')->nullable(true);
            $table->enum('modalidad', ['virtual', 'semi-presencial', 'presencial'])->nullable(true);
            $table->unsignedSmallInteger('plazo_respuesta')->nullable(false);
            $table->decimal('costo', $precision = 8, $scale = 2);
            $table->enum('tipo_usuario', ['interno', 'externo'])->nullable(false);
            $table->boolean('activo')->default(true);
            $table->BigInteger('by')->nullable(false);
            $table->string('url_proceso')->nullable(true);
            $table->foreignId('departamento_id');
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
        Schema::dropIfExists('tramites');
    }
}
