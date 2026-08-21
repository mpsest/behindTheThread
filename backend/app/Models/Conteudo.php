<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conteudo extends Model
{
    protected $table = 'conteudos';
    protected $fillable = ['nome', 'descricao', 'site'];
    public $timestamps = false;
}
