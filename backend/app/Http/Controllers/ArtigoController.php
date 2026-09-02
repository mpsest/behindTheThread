<?php

namespace App\Http\Controllers;

use App\Models\Artigo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ArtigoController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Artigo::with(['keywords'])->get());
    }

    public function indexLatest(): JsonResponse
    {
        return response()->json(Artigo::with(['keywords'])->latest()->get());
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(Artigo::with(['keywords'])->findOrFail($id));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'imagem' => ['required', 'string', 'max:255'],
            'texto' => ['required', 'string'],
        ]);
        return response()->json(Artigo::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $artigo = Artigo::findOrFail($id);
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'imagem' => ['required', 'string', 'max:255'],
            'texto' => ['required', 'string'],
        ]);
        $artigo->update($data);
        return response()->json($artigo);
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
