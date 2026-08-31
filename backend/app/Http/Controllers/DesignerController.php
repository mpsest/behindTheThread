<?php

namespace App\Http\Controllers;

use App\Models\Designer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DesignerController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Designer::with(['imagens', 'keywords'])->get());
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(Designer::with(['imagens', 'keywords'])->findOrFail($id));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'texto' => ['nullable', 'string'],
        ]);
        return response()->json(Designer::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $designer = Designer::findOrFail($id);
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'texto' => ['nullable', 'string'],
        ]);
        $designer->update($data);
        return response()->json($designer);
    }

    public function destroy(int $id): JsonResponse
    {
        Designer::findOrFail($id)->delete();
        return response()->json(['message' => 'Designer apagado com sucesso.']);
    }

    public function syncImagens(Request $request, int $id): JsonResponse
    {
        $designer = Designer::findOrFail($id);
        $data = $request->validate(['imagem_ids' => ['required', 'array'], 'imagem_ids.*' => ['integer', 'exists:imagens,id']]);
        $designer->imagens()->sync($data['imagem_ids']);
        return response()->json($designer->load('imagens'));
    }

    public function syncKeywords(Request $request, int $id): JsonResponse
    {
        $designer = Designer::findOrFail($id);
        $data = $request->validate(['keyword_ids' => ['required', 'array'], 'keyword_ids.*' => ['integer', 'exists:keywords,id']]);
        $designer->keywords()->sync($data['keyword_ids']);
        return response()->json($designer->load('keywords'));
    }
}
