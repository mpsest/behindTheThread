<?php

namespace App\Http\Controllers;

use App\Models\Artigo;
use App\Models\Designer;
use App\Models\DirtyTalk;
use App\Models\Mistura;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    public function latest(): JsonResponse
    {
        $columns = ['id', 'titulo', 'imagem'];

        return response()->json([
            'dirtyTalks' => DirtyTalk::latest()->limit(3)->get($columns),
            'artigos' => Artigo::latest()->limit(3)->get($columns),
            'designers' => Designer::latest()->limit(3)->get($columns),
            'misturas' => Mistura::where('aprovado', true)
                ->latest()
                ->limit(3)
                ->get([
                    'id',
                    'nome_projeto',
                    'area',
                    'data_inicio',
                    'duracao',
                    'localizacao',
                    'regime',
                ]),
        ]);
    }
}
