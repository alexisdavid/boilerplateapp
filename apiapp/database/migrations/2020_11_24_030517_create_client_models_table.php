<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_models', function (Blueprint $table) {
            $table->id('client_id');
            $table->timestamps();
            $table->string('business_name');
            $table->string('rfc')->unique();
            $table->string('direccion')->nullable();
            $table->string('cp')->nullable();
            $table->string('email')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_models');
    }
}
