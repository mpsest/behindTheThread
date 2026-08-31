<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Artigo extends Model
{
    protected $table = 'artigos';
    protected $fillable = ['titulo', 'texto'];
    public $timestamps = false;

    public function imagens(): BelongsToMany
    {
        return $this->belongsToMany(Imagem::class, 'artigos_imagem', 'artigo_id', 'imagem_id');
    }

    public function keywords(): BelongsToMany
    {
        return $this->belongsToMany(Keyword::class, 'artigos_keyword', 'artigo_id', 'keyword_id');
    }
}
