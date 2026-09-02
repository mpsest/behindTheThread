<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('espacos', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 150);
            $table->string('site', 255)->nullable();
            $table->string('email', 150)->nullable();
            $table->string('localidade', 150)->nullable();
            $table->string('categoria', 150);
        });
    }
    public function down(): void { Schema::dropIfExists('espacos'); }
};
