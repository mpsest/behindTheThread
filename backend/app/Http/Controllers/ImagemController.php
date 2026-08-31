<?php

namespace App\Http\Controllers;

use App\Models\Imagem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ImagemController extends Controller
{
    public function index(): JsonResponse { return response()->json(Imagem::all()); }

    public function show(int $id): JsonResponse { return response()->json(Imagem::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'url' => ['required', 'string', 'max:255'],
        ]);
        return response()->json(Imagem::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $imagem = Imagem::findOrFail($id);
        $data = $request->validate([
            'url' => ['required', 'string', 'max:255'],
        ]);
        $imagem->update($data);
        return response()->json($imagem);
    }

    public function destroy(int $id): JsonResponse
    {
        Imagem::findOrFail($id)->delete();
        return response()->json(['message' => 'Imagem apagada com sucesso.']);
    }
}
