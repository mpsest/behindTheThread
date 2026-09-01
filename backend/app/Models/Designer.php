<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Designer extends Model
{
    protected $table = 'designers';
    protected $fillable = ['titulo', 'imagem', 'texto'];
    public $timestamps = false;

    public function keywords(): BelongsToMany
    {
        return $this->belongsToMany(Keyword::class, 'designers_keyword', 'designer_id', 'keyword_id');
    }
}
