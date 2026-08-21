<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    protected $table = 'tools';
    protected $fillable = ['name', 'url', 'description', 'opensource'];
    public $timestamps = false;

    protected function casts(): array
    {
        return [
            'opensource' => 'boolean',
        ];
    }
}
