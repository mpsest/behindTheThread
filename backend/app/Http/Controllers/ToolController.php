<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ToolController extends Controller
{
    public function index(): JsonResponse { return response()->json(Tool::all()); }

    public function show(int $id): JsonResponse { return response()->json(Tool::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'url' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'opensource' => ['sometimes', 'boolean'],
        ]);
        return response()->json(Tool::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $tool = Tool::findOrFail($id);
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'url' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'opensource' => ['sometimes', 'boolean'],
        ]);
        $tool->update($data);
        return response()->json($tool);
    }

    public function destroy(int $id): JsonResponse
    {
        Tool::findOrFail($id)->delete();
        return response()->json(['message' => 'Tool deleted successfully.']);
    }
}
