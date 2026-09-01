<?php

namespace App\Http\Controllers;

use App\Models\DirtyTalk;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DirtyTalkController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(DirtyTalk::with(['keywords'])->get());
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(DirtyTalk::with(['keywords'])->findOrFail($id));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'imagem' => ['nullable', 'string', 'max:255'],
            'texto' => ['nullable', 'string'],
        ]);
        return response()->json(DirtyTalk::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $dirtyTalk = DirtyTalk::findOrFail($id);
        $data = $request->validate([
            'titulo' => ['required', 'string', 'max:150'],
            'imagem' => ['nullable', 'string', 'max:255'],
            'texto' => ['nullable', 'string'],
        ]);
        $dirtyTalk->update($data);
        return response()->json($dirtyTalk);
    }

    public function destroy(int $id): JsonResponse
    {
        DirtyTalk::findOrFail($id)->delete();
        return response()->json(['message' => 'Dirty Talk apagado com sucesso.']);
    }

    public function syncKeywords(Request $request, int $id): JsonResponse
    {
        $dirtyTalk = DirtyTalk::findOrFail($id);
        $data = $request->validate(['keyword_ids' => ['required', 'array'], 'keyword_ids.*' => ['integer', 'exists:keywords,id']]);
        $dirtyTalk->keywords()->sync($data['keyword_ids']);
        return response()->json($dirtyTalk->load('keywords'));
    }
}
