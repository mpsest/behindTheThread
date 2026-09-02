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
        Schema::create('misturas', function (Blueprint $table) {
            $table->id();

            $table->string('autor');
            $table->string('nome_projeto');
            $table->text('descricao');
            $table->string('regime');
            $table->string('localizacao')->nullable();
            $table->string('area');
            $table->date('data_inicio');
            $table->string('duracao');
            $table->decimal('orcamento', 10, 2)->nullable();
            $table->integer('n_colaboradores')->nullable();
            $table->email('email');
            $table->string('telemovel');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('misturas');
    }
};