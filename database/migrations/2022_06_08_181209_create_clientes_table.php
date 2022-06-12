<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->index()->unique();
            $table->string('rfc')->nullable(true);
            $table->string('curp')->nullable(true);
            $table->string('apellido1')->nullable(true);
            $table->string('apellido2')->nullable(true);
            $table->string('nombre')->nullable(true);
            $table->BigInteger('cct_id')->nullable(true);
            $table->boolean('interno')->default(false);
            $table->string('email')->nullable(true);
            $table->string('telefono')->nullable(true);
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
        Schema::dropIfExists('clientes');
    }
}
