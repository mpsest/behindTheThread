<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Artigo extends Model
{
    protected $table = 'artigos';
    protected $fillable = ['titulo', 'imagem', 'texto'];

    public function keywords(): BelongsToMany
    {
        return $this->belongsToMany(Keyword::class, 'artigos_keyword', 'artigo_id', 'keyword_id');
    }
}
