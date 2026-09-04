<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


Route::get('/', function () {
    return view('welcome');
});

// Laravel Sanctum

Route::post('/login', function (Request $request) {
      $credentials = $request->validate([
          'email' => ['required', 'email'],
          'password' => ['required'],
      ]);

      if (! Auth::attempt($credentials, $request->boolean('remember'))) {
          throw ValidationException::withMessages(['email' => 'Invalid credentials.']);
      }

      $request->session()->regenerate();
      //return response()->noContent();

    //guarda o utilizador
     $user = Auth::user();
    //  //cria um token sanctum para react
    //  $token = $user->createToken('react')->plainTextToken;
    // retorna mensagem de sucesso, utilizador e token
     return response()->json([
        'message' => 'Login efetuado com sucesso.',
        'user' => $user,
        //'token' => $token,
    ]);
  })->name('login');

  Route::post('/logout', function (Request $request) {

    // //guarda o utilizador
    // $user = Auth::user();

    // // apaga o token Sanctum atual, se existir
    // if ($user) {
    //     $user->tokens()->delete();
    // }

      Auth::guard('web')->logout();
      $request->session()->invalidate();
      $request->session()->regenerateToken();
      //return response()->noContent();

      return response()->json([
        'message' => 'Logout efetuado com sucesso.'
      ]);
  })->middleware('auth:sanctum');
