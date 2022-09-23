<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolicitudsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicituds', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->index()->unique();
            $table->BigInteger('by')->nullable(false);
            $table->foreignId('cliente_id');
            $table->foreignId('tramite_id');
            $table->foreignId('medio_id');
            $table->BigInteger('modified_by')->nullable(false);
            $table->boolean('concluido')->default(false);
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
        Schema::dropIfExists('solicituds');
    }
}
