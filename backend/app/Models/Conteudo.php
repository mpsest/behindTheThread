<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conteudo extends Model
{
    protected $table = 'conteudos';
    protected $fillable = ['nome', 'site', 'descricao'];
    public $timestamps = false;
}
