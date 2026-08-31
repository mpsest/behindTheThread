<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Credenciais inválidas.',
            ], 401);
        }

        $token = $user->createToken('api')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sessão terminada com sucesso.',
        ]);
    }

    public function forgotPassword(Request $request): JsonResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json([
                'message' => 'Enviámos um link de recuperação de password para o seu e-mail.',
            ]);
        }

        return response()->json([
            'message' => 'Se o e-mail existir na nossa base de dados, receberá um link de recuperação.',
        ]);
    }

    public function resetPassword(Request $request): JsonResponse
    {
        $request->validate([
            'token' => ['required', 'string'],
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->setRememberToken(Str::random(60));

                $user->save();
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return response()->json([
                'message' => 'Password reposta com sucesso.',
            ]);
        }

        return response()->json([
            'message' => match ($status) {
                Password::INVALID_TOKEN => 'Este link de recuperação é inválido ou já expirou.',
                Password::INVALID_USER => 'Não encontrámos nenhuma conta com esse e-mail.',
                default => 'Não foi possível repor a password. Tente novamente.',
            },
        ], 422);
    }

    public function changePassword(Request $request, int $id): JsonResponse
    {
        $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        $user = User::findOrFail($id);

        if (!Hash::check($request->input('current_password'), $user->password)) {
            return response()->json([
                'message' => 'A password atual está incorreta.',
            ], 422);
        }

        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json([
            'message' => 'Password alterada com sucesso.',
        ]);
    }
}
