<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Imagem extends Model
{
    protected $table = 'imagens';
    protected $fillable = ['url'];
    public $timestamps = false;
}
