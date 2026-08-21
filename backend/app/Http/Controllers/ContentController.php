<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function index(): JsonResponse { return response()->json(Content::all()); }

    public function show(int $id): JsonResponse { return response()->json(Content::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'description' => ['nullable', 'string'],
            'url' => ['nullable', 'string', 'max:255'],
        ]);
        return response()->json(Content::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $content = Content::findOrFail($id);
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'description' => ['nullable', 'string'],
            'url' => ['nullable', 'string', 'max:255'],
        ]);
        $content->update($data);
        return response()->json($content);
    }

    public function destroy(int $id): JsonResponse
    {
        Content::findOrFail($id)->delete();
        return response()->json(['message' => 'Conteúdo apagado com sucesso.']);
    }
}
