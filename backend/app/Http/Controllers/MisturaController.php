<?php

namespace App\Http\Controllers;

use App\Models\Mistura;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MisturaController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(
            Mistura::latest()->get()
        );
    }

    public function indexLatest(): JsonResponse
    {
        return response()->json(
            Mistura::latest()->limit(3)->get()
        );
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(
            Mistura::findOrFail($id)
        );
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'autor' => ['required', 'string', 'max:255'],
            'nomeProjeto' => ['required', 'string', 'max:255'],
            'descricao' => ['required', 'text'],
            'regime' => ['required', 'string'],
            'localizacao' => ['nullable', 'string', 'max:255'],
            'area' => ['required', 'string'],
            'data_inicio' => ['required', 'date'],
            'duracao' => ['required', 'string', 'max:255'],
            'orcamento' => ['nullable', 'numeric', 'min:0'],
            'n_colaboradores' => ['nullable', 'integer', 'min:0'],
            'email' => ['required', 'email', 'max:255'],
            'telemovel' => ['required', 'string', 'max:20'],
        ]);

        return response()->json(
            Mistura::create($data),
            201
        );
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $mistura = Mistura::findOrFail($id);

        $data = $request->validate([
            'autor' => ['required', 'string', 'max:255'],
            'nomeProjeto' => ['required', 'string', 'max:255'],
            'descricao' => ['required', 'text'],
            'regime' => ['required', 'string'],
            'localizacao' => ['nullable', 'string', 'max:255'],
            'area' => ['required', 'string'],
            'data_inicio' => ['required', 'date'],
            'duracao' => ['required', 'string', 'max:255'],
            'orcamento' => ['nullable', 'numeric', 'min:0'],
            'n_colaboradores' => ['nullable', 'integer', 'min:0'],
            'email' => ['required', 'email', 'max:255'],
            'telemovel' => ['required', 'string', 'max:20'],
        ]);

        $mistura->update($data);

        return response()->json($mistura);
    }

    public function destroy(int $id): JsonResponse
    {
        Mistura::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Mistura apagada com sucesso.'
        ]);
    }
}
