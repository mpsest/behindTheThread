<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Espaco extends Model
{
    protected $table = 'espacos';
    protected $fillable = ['nome', 'site', 'email', 'localidade', 'categoria'];
    public $timestamps = false;
}
