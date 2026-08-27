<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    protected $table = 'newsletter';
    protected $fillable = ['email', 'subscribed'];
    public $timestamps = false;

    protected function casts(): array
    {
        return [
            'subscribed' => 'boolean',
        ];
    }
}
