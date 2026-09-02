<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('designers', function (Blueprint $table) {
            $table->id();
            $table->string('titulo', 255);
            $table->url('imagem', 255);
            $table->text('texto');
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('designers'); }
};
