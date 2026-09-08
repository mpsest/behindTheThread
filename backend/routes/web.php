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

    //guarda o utilizador
     $user = Auth::user();
     return response()->json([
        'message' => 'Login efetuado com sucesso.',
        'user' => $user,
    ]);
  })->name('login');

  Route::post('/logout', function (Request $request) {

      Auth::guard('web')->logout();
      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return response()->json([
        'message' => 'Logout efetuado com sucesso.'
      ]);
  })->middleware('auth:sanctum');
