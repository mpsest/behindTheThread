<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mistura extends Model
{
    protected $table = 'misturas';

    protected $fillable = [
        'autor',
        'nomeProjeto',
        'descricao',
        'regime',
        'localizacao',
        'area',
        'data_inicio',
        'duracao',
        'orcamento',
        'n_colaboradores',
        'email',
        'telemovel',
    ];

    protected $casts = [
        'data_inicio' => 'date',
        'orcamento' => 'decimal:2',
        'n_colaboradores' => 'integer',
    ];
}