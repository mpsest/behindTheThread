<?php

namespace App\Http\Controllers;

use App\Models\Artigo;
use App\Models\Designer;
use App\Models\DirtyTalk;
use App\Models\Keyword;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class KeywordController extends Controller
{
    public function index(): JsonResponse { return response()->json(Keyword::all()); }

    public function show(int $id): JsonResponse { return response()->json(Keyword::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'palavra' => ['required', 'string', 'max:100'],
        ]);
        return response()->json(Keyword::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $keyword = Keyword::findOrFail($id);
        $data = $request->validate([
            'palavra' => ['required', 'string', 'max:100'],
        ]);
        $keyword->update($data);
        return response()->json($keyword);
    }

    public function destroy(int $id): JsonResponse
    {
        Keyword::findOrFail($id)->delete();
        return response()->json(['message' => 'Keyword apagada com sucesso.']);
    }

    // Devolve ate 3 conteudos que partilhem keywords com o conteudo.
    public function relacionados(string $tipo, int $id): JsonResponse
    {
        // Obtem o conteudo com as suas keywords.
        if ($tipo === 'artigo') {
            $origem = Artigo::with('keywords')->findOrFail($id);
        } elseif ($tipo === 'dirty_talk') {
            $origem = DirtyTalk::with('keywords')->findOrFail($id);
        } elseif ($tipo === 'designer') {
            $origem = Designer::with('keywords')->findOrFail($id);
        } else {
            abort(404, 'Tipo de conteudo desconhecido.');
        }

        $keywordIds = [];
        foreach ($origem->keywords as $keyword) {
            $keywordIds[] = $keyword->id;
        }

        // Se não tiver keywords então não conteudo relacionado.
        if (count($keywordIds) === 0) {
            return response()->json([]);
        }

        $relacionados = [];

        // Filtra artigos com keywords em comum.
        $artigos = Artigo::with('keywords')
            ->whereHas('keywords', function ($query) use ($keywordIds) {
                $query->whereIn('keywords.id', $keywordIds);
            })
            ->get();

        foreach ($artigos as $artigo) {
            // Ignora o conteudo original
            if ($tipo === 'artigo' && $artigo->id === $id) {
                continue;
            }

            $comuns = $this->contarKeywordsComuns($artigo, $keywordIds);

            if ($comuns > 0) {
                $relacionados[] = [
                    'tipo' => 'artigo',
                    'id' => $artigo->id,
                    'titulo' => $artigo->titulo,
                    'imagem' => $artigo->imagem,
                    'keywords_comuns' => $comuns,
                ];
            }
        }

        // Filtra dirty talks com keywords em comum.
        $dirtyTalks = DirtyTalk::with('keywords')
            ->whereHas('keywords', function ($query) use ($keywordIds) {
                $query->whereIn('keywords.id', $keywordIds);
            })
            ->get();

        foreach ($dirtyTalks as $dirtyTalk) {
            if ($tipo === 'dirty_talk' && $dirtyTalk->id === $id) {
                continue;
            }

            $comuns = $this->contarKeywordsComuns($dirtyTalk, $keywordIds);

            if ($comuns > 0) {
                $relacionados[] = [
                    'tipo' => 'dirty_talk',
                    'id' => $dirtyTalk->id,
                    'titulo' => $dirtyTalk->titulo,
                    'imagem' => $dirtyTalk->imagem,
                    'keywords_comuns' => $comuns,
                ];
            }
        }

        // Filtra designers com keywords em comum.
        $designers = Designer::with('keywords')
            ->whereHas('keywords', function ($query) use ($keywordIds) {
                $query->whereIn('keywords.id', $keywordIds);
            })
            ->get();

        foreach ($designers as $designer) {
            if ($tipo === 'designer' && $designer->id === $id) {
                continue;
            }

            $comuns = $this->contarKeywordsComuns($designer, $keywordIds);

            if ($comuns > 0) {
                $relacionados[] = [
                    'tipo' => 'designer',
                    'id' => $designer->id,
                    'titulo' => $designer->titulo,
                    'imagem' => $designer->imagem,
                    'keywords_comuns' => $comuns,
                ];
            }
        }

        // Ordena do maior para o menor numero de keywords em comum.
        usort($relacionados, function ($a, $b) {
            return $b['keywords_comuns'] - $a['keywords_comuns'];
        });

        // Seleciona os 3 primeiros resultados.
        return response()->json(array_slice($relacionados, 0, 3));
    }

    private function contarKeywordsComuns($conteudo, array $keywordIds): int
    {
        $comuns = 0;

        foreach ($conteudo->keywords as $keyword) {
            if (in_array($keyword->id, $keywordIds)) {
                $comuns++;
            }
        }

        return $comuns;
    }
}
