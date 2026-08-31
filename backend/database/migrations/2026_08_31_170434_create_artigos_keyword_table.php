<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('artigos_keyword', function (Blueprint $table) {
            $table->foreignId('artigo_id')->constrained('artigos')->cascadeOnDelete();
            $table->foreignId('keyword_id')->constrained('keywords')->cascadeOnDelete();
            $table->primary(['artigo_id', 'keyword_id']);
        });
    }
    public function down(): void { Schema::dropIfExists('artigos_keyword'); }
};
