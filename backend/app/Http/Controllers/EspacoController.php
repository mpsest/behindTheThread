<?php

namespace App\Http\Controllers;

use App\Models\Espaco;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EspacoController extends Controller
{
    public function index(): JsonResponse { return response()->json(Espaco::all()); }

    public function show(int $id): JsonResponse
    {
        return response()->json(Espaco::findOrFail($id));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:150'],
            'site' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:150'],
            'localidade' => ['nullable', 'string', 'max:150'],
        ]);
        return response()->json(Espaco::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $espaco = Espaco::findOrFail($id);
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:150'],
            'site' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:150'],
            'localidade' => ['nullable', 'string', 'max:150'],
        ]);
        $espaco->update($data);
        return response()->json($espaco);
    }

    public function destroy(int $id): JsonResponse
    {
        Espaco::findOrFail($id)->delete();
        return response()->json(['message' => 'Espaço apagado com sucesso.']);
    }
}
