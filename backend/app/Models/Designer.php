<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Designer extends Model
{
    protected $table = 'designers';
    protected $fillable = ['titulo', 'texto'];
    public $timestamps = false;

    public function imagens(): BelongsToMany
    {
        return $this->belongsToMany(Imagem::class, 'designers_imagem', 'designer_id', 'imagem_id');
    }

    public function keywords(): BelongsToMany
    {
        return $this->belongsToMany(Keyword::class, 'designers_keyword', 'designer_id', 'keyword_id');
    }
}
