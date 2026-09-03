<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UtilizadorController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(User::where('user_type', User::TYPE_USER)->get());
    }

    public function show(Request $request, int $id): JsonResponse
    {
        $user = User::where('user_type', User::TYPE_USER)->findOrFail($id);

        if (($request->user()->id !== $user->id)|| ($request->user()->user_type !== User::TYPE_ADMIN)) {
            abort(403, 'Só pode ver os dados da sua própria conta.');
        }

        return response()->json($user);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'email' => ['required', 'email', 'max:150', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'user_type' => User::TYPE_USER,
        ]);

        return response()->json($user, 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $user = User::where('user_type', User::TYPE_USER)->findOrFail($id);

        if (
            $request->user()->user_type !== User::TYPE_ADMIN
            && $request->user()->id !== $user->id
        ) {
            abort(403, 'Só pode alterar os dados da sua própria conta.');
        }

        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'email' => ['required', 'email', 'max:150', 'unique:users,email,' . $user->id],
            'password' => ['nullable', 'string', 'min:6'],
        ]);

        $user->name = $data['name'];
        $user->email = $data['email'];
        if (!empty($data['password'])) {
            $user->password = Hash::make($data['password']);
        }

        $user->user_type = User::TYPE_USER;
        $user->save();

        return response()->json($user);
    }

    public function destroy(Request $request, int $id): JsonResponse
    {
        if ($request->user()->user_type !== User::TYPE_ADMIN) {
            abort(403, 'Apenas o administrador pode apagar utilizadores.');
        }

        $user = User::where('user_type', User::TYPE_USER)->findOrFail($id);
        $user->delete();
        return response()->json(['message' => 'Utilizador apagado com sucesso.']);
    }
}
