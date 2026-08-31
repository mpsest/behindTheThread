<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    protected $table = 'newsletter';
    protected $fillable = ['email', 'subscrito'];
    public $timestamps = false;

    protected function casts(): array
    {
        return [
            'subscrito' => 'boolean',
        ];
    }
}
