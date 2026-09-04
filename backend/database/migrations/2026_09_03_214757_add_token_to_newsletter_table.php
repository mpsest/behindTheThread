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
        if (! Schema::hasColumn('newsletter', 'token')) {
            Schema::table('newsletter', function (Blueprint $table) {
                $table->string('token', 64)->unique()->nullable()->after('email');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasColumn('newsletter', 'token')) {
            Schema::table('newsletter', function (Blueprint $table) {
                $table->dropColumn('token');
            });
        }
    }
};
