<?php

namespace App\Http\Controllers;

use App\Models\Artigo;
use App\Models\Keyword;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ArtigoController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Artigo::with(['keywords'])->latest()->get());
    }

    public function indexLatest(): JsonResponse
    {
        return response()->json(Artigo::with(['keywords'])->latest()->limit(3)->get());
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(Artigo::with(['keywords'])->findOrFail($id));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:255'],
            'imagem' => ['required', 'url'],
            'texto' => ['required', 'string'],
            'keywords' => ['nullable', 'array'],
            'keywords.*' => ['nullable', 'string', 'max:100'],
        ]);
        $keywordNames = [];
        foreach ($request->input('keywords', []) as $keyword) {
            $keyword = trim($keyword);
            if ($keyword !== '' && !in_array($keyword, $keywordNames)) {
                $keywordNames[] = $keyword;
            }
        }
        unset($data['keywords']);

        $artigo = Artigo::create($data);
        $keywordIds = [];
        foreach ($keywordNames as $keywordName) {
            $keyword = Keyword::firstOrCreate(['palavra' => $keywordName]);
            $keywordIds[] = $keyword->id;
        }
        $artigo->keywords()->sync($keywordIds);

        return response()->json($artigo->load('keywords'), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $artigo = Artigo::findOrFail($id);
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:255'],
            'imagem' => ['required', 'url'],
            'texto' => ['required', 'string'],
            'keywords' => ['nullable', 'array'],
            'keywords.*' => ['nullable', 'string', 'max:100'],
        ]);
        $keywordNames = [];
        foreach ($request->input('keywords', []) as $keyword) {
            $keyword = trim($keyword);
            if ($keyword !== '' && !in_array($keyword, $keywordNames)) {
                $keywordNames[] = $keyword;
            }
        }
        unset($data['keywords']);

        $artigo->update($data);
        $keywordIds = [];
        foreach ($keywordNames as $keywordName) {
            $keyword = Keyword::firstOrCreate(['palavra' => $keywordName]);
            $keywordIds[] = $keyword->id;
        }
        $artigo->keywords()->sync($keywordIds);

        return response()->json($artigo->load('keywords'));
    }

    public function destroy(int $id): JsonResponse
    {
        Artigo::findOrFail($id)->delete();
        return response()->json(['message' => 'Artigo apagado com sucesso.']);
    }

    public function syncKeywords(Request $request, int $id): JsonResponse
    {
        $artigo = Artigo::findOrFail($id);
        $data = $request->validate(['keyword_ids' => ['required', 'array'], 'keyword_ids.*' => ['integer', 'exists:keywords,id']]);
        $artigo->keywords()->sync($data['keyword_ids']);
        return response()->json($artigo->load('keywords'));
    }
}
