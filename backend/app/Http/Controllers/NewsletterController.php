<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterMail;
use App\Models\Newsletter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NewsletterController extends Controller
{
    public function index(): JsonResponse { return response()->json(Newsletter::all()); }

    public function show(int $id): JsonResponse { return response()->json(Newsletter::findOrFail($id)); }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'max:150', 'unique:newsletter,email'],
        ]);
        return response()->json(Newsletter::create($data), 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $newsletter = Newsletter::findOrFail($id);
        $data = $request->validate([
            'email' => ['required', 'email', 'max:150', 'unique:newsletter,email,' . $newsletter->id],
        ]);
        $newsletter->update($data);
        return response()->json($newsletter);
    }

    public function destroy(int $id): JsonResponse
    {
        Newsletter::findOrFail($id)->delete();
        return response()->json(['message' => 'Registo de newsletter apagado com sucesso.']);
    }

    public function send(Request $request): JsonResponse
    {
        $data = $request->validate([
            'subject' => ['required', 'string', 'max:255'],
            'html' => ['required', 'string'],
        ]);

        $total = Newsletter::count();

        if ($total === 0) {
            return response()->json([
                'message' => 'Não existem subscritores na tabela newsletter.',
            ], 422);
        }

        Newsletter::query()
            ->select('email')
            ->orderBy('id')
            ->chunk(100, function ($subscribers) use ($data) {
                foreach ($subscribers as $subscriber) {
                    Mail::to($subscriber->email)
                        ->queue(new NewsletterMail($data['subject'], $data['html']));
                }
            });

        return response()->json([
            'message' => "Newsletter colocada na fila de envio para {$total} destinatário(s).",
        ]);
    }
}
