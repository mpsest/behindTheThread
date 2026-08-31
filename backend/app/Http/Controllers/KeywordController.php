<?php

namespace App\Http\Controllers;

use App\Models\Keyword;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class KeywordController extends Controller
{
    public function index(): JsonResponse { return response()->json(Keyword::all()); }

    public function show(int $id): JsonResponse { return response()->json(Keyword::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'palavra' => ['required', 'string', 'max:100'],
        ]);
        return response()->json(Keyword::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $keyword = Keyword::findOrFail($id);
        $data = $request->validate([
            'palavra' => ['required', 'string', 'max:100'],
        ]);
        $keyword->update($data);
        return response()->json($keyword);
    }

    public function destroy(int $id): JsonResponse
    {
        Keyword::findOrFail($id)->delete();
        return response()->json(['message' => 'Keyword apagada com sucesso.']);
    }
}
