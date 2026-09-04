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
        if (! Schema::hasColumn('misturas', 'aprovado')) {
            Schema::table('misturas', function (Blueprint $table) {
                $table->boolean('aprovado')->default(false)->after('telemovel');
            });
        } else {
            Schema::table('misturas', function (Blueprint $table) {
                $table->boolean('aprovado')->default(false)->change(); // deixa de ser obrigatório no insert
            });
        }

        if (! Schema::hasColumn('misturas', 'lida')) {
            Schema::table('misturas', function (Blueprint $table) {
                $table->boolean('lida')->default(false)->after('aprovado');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('misturas', 'lida')) {
            Schema::table('misturas', function (Blueprint $table) {
                $table->dropColumn('lida');
            });
        }
    }

};
