<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        foreach (['espacos', 'ferramentas', 'conteudos'] as $tableName) {
            if (! Schema::hasColumn($tableName, 'categoria')) {
                Schema::table($tableName, function (Blueprint $table) {
                    $table->string('categoria', 150)->default('Sem categoria');
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        foreach (['espacos', 'ferramentas', 'conteudos'] as $tableName) {
            if (Schema::hasColumn($tableName, 'categoria')) {
                Schema::table($tableName, function (Blueprint $table) {
                    $table->dropColumn('categoria');
                });
            }
        }
    }
};
