<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DirtyTalk extends Model
{
    protected $table = 'dirty_talks';
    protected $fillable = ['titulo', 'texto'];
    public $timestamps = false;

    public function imagens(): BelongsToMany
    {
        return $this->belongsToMany(Imagem::class, 'dirty_talks_imagem', 'dirty_talk_id', 'imagem_id');
    }

    public function keywords(): BelongsToMany
    {
        return $this->belongsToMany(Keyword::class, 'dirty_talks_keyword', 'dirty_talk_id', 'keyword_id');
    }
}
