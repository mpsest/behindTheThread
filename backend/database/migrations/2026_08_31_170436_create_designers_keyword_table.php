<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('designers_keyword', function (Blueprint $table) {
            $table->foreignId('designer_id')->constrained('designers')->cascadeOnDelete();
            $table->foreignId('keyword_id')->constrained('keywords')->cascadeOnDelete();
            $table->primary(['designer_id', 'keyword_id']);
        });
    }
    public function down(): void { Schema::dropIfExists('designers_keyword'); }
};
