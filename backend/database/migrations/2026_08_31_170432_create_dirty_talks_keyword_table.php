<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('dirty_talks_keyword', function (Blueprint $table) {
            $table->foreignId('dirty_talk_id')->constrained('dirty_talks')->cascadeOnDelete();
            $table->foreignId('keyword_id')->constrained('keywords')->cascadeOnDelete();
            $table->primary(['dirty_talk_id', 'keyword_id']);
        });
    }
    public function down(): void { Schema::dropIfExists('dirty_talks_keyword'); }
};
