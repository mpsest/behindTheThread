<?php

namespace App\Http\Controllers;

use App\Models\Space;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SpaceController extends Controller
{
    public function index(): JsonResponse { return response()->json(Space::all()); }

    public function show(int $id): JsonResponse
    {
        return response()->json(Space::findOrFail($id));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'url' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:150'],
            'location' => ['nullable', 'string', 'max:150'],
        ]);
        return response()->json(Space::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $space = Space::findOrFail($id);
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'url' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:150'],
            'location' => ['nullable', 'string', 'max:150'],
        ]);
        $space->update($data);
        return response()->json($space);
    }

    public function destroy(int $id): JsonResponse
    {
        Space::findOrFail($id)->delete();
        return response()->json(['message' => 'Espaço apagado com sucesso.']);
    }
}
