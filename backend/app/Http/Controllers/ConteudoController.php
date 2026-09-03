<?php

namespace App\Http\Controllers;

use App\Models\Conteudo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ConteudoController extends Controller
{
    public function index(): JsonResponse { return response()->json(Conteudo::all()); }

    public function show(int $id): JsonResponse { return response()->json(Conteudo::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:255'],
            'site' => ['nullable', 'url'],
            'descricao' => ['nullable', 'string'],
        ]);
        return response()->json(Conteudo::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $conteudo = Conteudo::findOrFail($id);
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:255'],
            'site' => ['nullable', 'url'],
            'descricao' => ['nullable', 'string'],
        ]);
        $conteudo->update($data);
        return response()->json($conteudo);
    }

    public function destroy(int $id): JsonResponse
    {
        Conteudo::findOrFail($id)->delete();
        return response()->json(['message' => 'Conteúdo apagado com sucesso.']);
    }
}
