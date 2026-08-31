<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function index(): JsonResponse { return response()->json(Newsletter::all()); }

    public function show(int $id): JsonResponse { return response()->json(Newsletter::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'max:150', 'unique:newsletter,email'],
            'subscrito' => ['sometimes', 'boolean'],
        ]);
        return response()->json(Newsletter::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $newsletter = Newsletter::findOrFail($id);
        $data = $request->validate([
            'email' => ['required', 'email', 'max:150', 'unique:newsletter,email,' . $newsletter->id],
            'subscrito' => ['sometimes', 'boolean'],
        ]);
        $newsletter->update($data);
        return response()->json($newsletter);
    }

    public function destroy(int $id): JsonResponse
    {
        Newsletter::findOrFail($id)->delete();
        return response()->json(['message' => 'Registo de newsletter apagado com sucesso.']);
    }
}
