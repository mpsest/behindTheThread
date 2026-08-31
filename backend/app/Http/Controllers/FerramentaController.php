<?php

namespace App\Http\Controllers;

use App\Models\Ferramenta;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FerramentaController extends Controller
{
    public function index(): JsonResponse { return response()->json(Ferramenta::all()); }

    public function show(int $id): JsonResponse { return response()->json(Ferramenta::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:150'],
            'site' => ['nullable', 'string', 'max:255'],
            'descricao' => ['nullable', 'string'],
            'opensource' => ['nullable', 'string'],
        ]);
        return response()->json(Ferramenta::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $ferramenta = Ferramenta::findOrFail($id);
        $data = $request->validate([
            'nome' => ['required', 'string', 'max:150'],
            'site' => ['nullable', 'string', 'max:255'],
            'descricao' => ['nullable', 'string'],
            'opensource' => ['nullable', 'string'],
        ]);
        $ferramenta->update($data);
        return response()->json($ferramenta);
    }

    public function destroy(int $id): JsonResponse
    {
        Ferramenta::findOrFail($id)->delete();
        return response()->json(['message' => 'Ferramenta apagada com sucesso.']);
    }
}
