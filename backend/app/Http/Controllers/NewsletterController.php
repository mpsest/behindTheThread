<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterMail;
use App\Models\Newsletter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class NewsletterController extends Controller
{
    public function index(): JsonResponse { return response()->json(Newsletter::all()); }

    public function show(int $id): JsonResponse { return response()->json(Newsletter::findOrFail($id)); }

    /**
     * Regista o pedido de subscrição. Gera logo um token usado apenas para construir o link de anular subscrição.
     */
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'max:150', 'unique:newsletter,email'],
        ]);

        $subscriber = Newsletter::create([
            'email' => $data['email'],
            'token' => Str::random(48),
        ]);

        return response()->json([
            'message' => 'Subscrição efetuada com sucesso.',
        ], 201);
    }

    /**
     * Remove a subscrição a partir do link presente no rodapé
     */
    public function unsubscribe(Request $request): JsonResponse
    {
        $request->validate(['token' => ['required', 'string']]);

        $subscriber = Newsletter::where('token', $request->query('token'))->first();

        if (!$subscriber) {
            return response()->json([
                'message' => 'Link de anulação inválido ou já usado.',
            ], 404);
        }

        $subscriber->delete();

        return response()->json([
            'message' => 'Subscrição anulada com sucesso.',
        ]);
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

        $frontendUrl = rtrim(config('app.frontend_url', config('app.url')), '/');

        // Processa em blocos de 100 para não sobrecarregar a memória
        // com listas grandes, e coloca cada email na fila em vez de
        // o enviar de forma síncrona.
        Newsletter::query()
            ->select('email', 'token')
            ->orderBy('id')
            ->chunk(100, function ($subscribers) use ($data, $frontendUrl) {
                foreach ($subscribers as $subscriber) {
                    $unsubscribeUrl = $frontendUrl . '/newsletter/cancelar?token=' . $subscriber->token;

                    Mail::to($subscriber->email)
                        ->queue(new NewsletterMail($data['subject'], $data['html'], $unsubscribeUrl));
                }
            });

        return response()->json([
            'message' => "Newsletter colocada na fila de envio para {$total} destinatário(s).",
        ]);
    }
}
