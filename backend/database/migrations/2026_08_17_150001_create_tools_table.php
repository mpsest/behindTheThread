<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tools', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('url', 255)->nullable();
            $table->text('description')->nullable();
            $table->boolean('opensource')->default(true);
        });
    }
    public function down(): void { Schema::dropIfExists('tools'); }
};
