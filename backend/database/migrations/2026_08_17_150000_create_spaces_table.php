<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('spaces', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('url', 255)->nullable();
            $table->string('email', 150)->nullable();
            $table->string('location', 150)->nullable();
        });
    }
    public function down(): void { Schema::dropIfExists('spaces'); }
};
