<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', function (Request $request) {
      $credentials = $request->validate([
          'email' => ['required', 'email'],
          'password' => ['required'],
      ]);
      
      if (! Auth::attempt($credentials, $request->boolean('remember'))) {
          throw ValidationException::withMessages(['email' => 'Invalid credentials.']);
      }

      $request->session()->regenerate();
      return response()->noContent();
  });

  Route::post('/logout', function (Request $request) {
      Auth::guard('web')->logout();
      $request->session()->invalidate();
      $request->session()->regenerateToken();
      return response()->noContent();
  })->middleware('auth:sanctum');