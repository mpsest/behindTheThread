<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DirtyTalk extends Model
{
    protected $table = 'dirty_talks';
    protected $fillable = ['titulo', 'imagem', 'texto'];
    public $timestamps = false;

    public function keywords(): BelongsToMany
    {
        return $this->belongsToMany(Keyword::class, 'dirty_talks_keyword', 'dirty_talk_id', 'keyword_id');
    }
}
