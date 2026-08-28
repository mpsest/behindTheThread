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
            'subscribed' => ['required', 'boolean'],
        ]);
        return response()->json(Newsletter::create($data), 201);
    }

    public function update(Request $request, int $email): JsonResponse
    {
        $newsletter = Newsletter::where('email', $email)->firstOrFail();
        $data = $request->validate([
            'subscribed' => ['required', 'boolean'],
        ]);
        $newsletter->update($data);
        return response()->json($newsletter);
    }

}
