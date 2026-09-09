<?php

namespace App\Http\Controllers;

use App\Models\Mistura;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MisturaController extends Controller
{
    // Página pública: só o que está aprovado
    public function index(): JsonResponse
    {
        return response()->json(
            Mistura::where('aprovado', true)
                ->latest()
                ->get([
                    'id',
                    'nome_projeto',
                    'area',
                    'data_inicio',
                    'duracao',
                    'localizacao',
                    'regime',
                ])
        );
    }

    public function indexLatest(): JsonResponse
    {
        return response()->json(
            Mistura::where('aprovado', true)
                ->latest()
                ->limit(3)
                ->get([
                    'id',
                    'nome_projeto',
                    'area',
                    'data_inicio',
                    'duracao',
                    'localizacao',
                    'regime',
                ])
        );
    }

    // Pagina publica: so mostra misturas ja aprovadas, tal como o index.
    public function show(int $id): JsonResponse
    {
        return response()->json(
            Mistura::where('aprovado', true)->findOrFail($id)
        );
    }

    // --- ADMIN ---

    // Lista para o painel de aprovação (todas, ou só as não aprovadas)
    public function pendentes(): JsonResponse
    {
        return response()->json(
            Mistura::where('aprovado', false)->latest()->get()
        );
    }

    // Contador para o dashboard
    public function naoLidasCount(): JsonResponse
    {
        return response()->json([
            'total' => Mistura::where('lida', false)->where("aprovado", false)->count(),
        ]);
    }

    // Submissão vinda do formulário público
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'autor'           => ['required', 'string', 'max:255'],
            'nome_projeto'    => ['required', 'string', 'max:255'],
            'descricao'       => ['required', 'string'],
            'regime'          => ['required', 'string'],
            'localizacao'     => ['nullable', 'string', 'max:255'],
            'area'            => ['required', 'string'],
            'data_inicio'     => ['required', 'string', 'max:255'], // texto livre no form
            'duracao'         => ['required', 'string', 'max:255'],
            'orcamento'       => ['nullable', 'numeric', 'min:0'],
            'n_colaboradores' => ['nullable', 'integer', 'min:0'],
            'email'           => ['required', 'email', 'max:255'],
            'telemovel'       => ['required', 'string', 'max:20'],
        ]);

        $data['aprovado'] = false;
        $data['lida']     = false;

        return response()->json(Mistura::create($data), 201);
    }

    // Marcar como lida (quando o admin abre/vê a mensagem)
    public function marcarLida(int $id): JsonResponse
    {
        $mistura = Mistura::findOrFail($id);
        $mistura->update(['lida' => true]);
        return response()->json($mistura);
    }

    // Aceitar para publicação
    public function aprovar(int $id): JsonResponse
    {
        $mistura = Mistura::findOrFail($id);
        $mistura->update(['aprovado' => true, 'lida' => true]);
        return response()->json($mistura);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $mistura = Mistura::findOrFail($id);

        $data = $request->validate([
            'autor'           => ['required', 'string', 'max:255'],
            'nome_projeto'    => ['required', 'string', 'max:255'],
            'descricao'       => ['required', 'string'],
            'regime'          => ['required', 'string'],
            'localizacao'     => ['nullable', 'string', 'max:255'],
            'area'            => ['required', 'string'],
            'data_inicio'     => ['required', 'string', 'max:255'],
            'duracao'         => ['required', 'string', 'max:255'],
            'orcamento'       => ['nullable', 'numeric', 'min:0'],
            'n_colaboradores' => ['nullable', 'integer', 'min:0'],
            'email'           => ['required', 'email', 'max:255'],
            'telemovel'       => ['required', 'string', 'max:20'],
        ]);

        $mistura->update($data);

        return response()->json($mistura);
    }

    public function destroy(int $id): JsonResponse
    {
        Mistura::findOrFail($id)->delete();
        return response()->json(['message' => 'Mistura apagada com sucesso.']);
    }
}
