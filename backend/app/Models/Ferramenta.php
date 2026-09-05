<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ferramenta extends Model
{
    protected $table = 'ferramentas';
    protected $fillable = ['nome', 'site', 'descricao', 'categoria'];
    public $timestamps = false;
}
