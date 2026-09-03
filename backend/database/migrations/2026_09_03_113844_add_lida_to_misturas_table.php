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
    Schema::table('misturas', function (Blueprint $table) {
        $table->boolean('lida')->default(false)->after('aprovado');
        $table->boolean('aprovado')->default(false)->change(); // deixa de ser obrigatório no insert
    });
}

public function down(): void
{
    Schema::table('misturas', function (Blueprint $table) {
        $table->dropColumn('lida');
    });
}

};
