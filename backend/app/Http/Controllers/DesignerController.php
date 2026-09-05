<?php

namespace App\Http\Controllers;

use App\Models\Designer;
use App\Models\Keyword;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DesignerController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Designer::with(['keywords'])->latest()->get());
    }

    public function indexLatest(): JsonResponse
    {
        return response()->json(Designer::with(['keywords'])->latest()->limit(3)->get());
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(Designer::with(['keywords'])->findOrFail($id));
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

        $designer = Designer::create($data);
        $keywordIds = [];
        foreach ($keywordNames as $keywordName) {
            $keyword = Keyword::firstOrCreate(['palavra' => $keywordName]);
            $keywordIds[] = $keyword->id;
        }
        $designer->keywords()->sync($keywordIds);

        return response()->json($designer->load('keywords'), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $designer = Designer::findOrFail($id);
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

        $designer->update($data);
        $keywordIds = [];
        foreach ($keywordNames as $keywordName) {
            $keyword = Keyword::firstOrCreate(['palavra' => $keywordName]);
            $keywordIds[] = $keyword->id;
        }
        $designer->keywords()->sync($keywordIds);

        return response()->json($designer->load('keywords'));
    }

    public function destroy(int $id): JsonResponse
    {
        Designer::findOrFail($id)->delete();
        return response()->json(['message' => 'Designer apagado com sucesso.']);
    }

    public function syncKeywords(Request $request, int $id): JsonResponse
    {
        $designer = Designer::findOrFail($id);
        $data = $request->validate(['keyword_ids' => ['required', 'array'], 'keyword_ids.*' => ['integer', 'exists:keywords,id']]);
        $designer->keywords()->sync($data['keyword_ids']);
        return response()->json($designer->load('keywords'));
    }
}
