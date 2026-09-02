<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('ferramentas', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 150);
            $table->string('site', 255)->nullable();
            $table->text('descricao')->nullable();
            $table->string('categoria', 150);
        });
    }
    public function down(): void { Schema::dropIfExists('ferramentas'); }
};
