<?php

use App\Http\Controllers\ArtigoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConteudoController;
use App\Http\Controllers\DesignerController;
use App\Http\Controllers\DirtyTalkController;
use App\Http\Controllers\EspacoController;
use App\Http\Controllers\FerramentaController;
use App\Http\Controllers\KeywordController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\UtilizadorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('espacos', EspacoController::class);
Route::apiResource('ferramentas', FerramentaController::class);
Route::apiResource('conteudos', ConteudoController::class);
Route::apiResource('utilizadores', UtilizadorController::class);
Route::apiResource('newsletter', NewsletterController::class);

Route::apiResource('dirty-talks', DirtyTalkController::class);
Route::put('/dirty-talks/{id}/keywords', [DirtyTalkController::class, 'syncKeywords']);

Route::apiResource('artigos', ArtigoController::class);
Route::put('/artigos/{id}/keywords', [ArtigoController::class, 'syncKeywords']);

Route::apiResource('designers', DesignerController::class);
Route::put('/designers/{id}/keywords', [DesignerController::class, 'syncKeywords']);

Route::apiResource('keywords', KeywordController::class);

// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Laravel Sanctum
Route::middleware('auth:sanctum')->group(function () {
      Route::get('/user', fn (Request $request) => $request->user());
  });

Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->name('password.email');
Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('password.update');
Route::post('/utilizadores/{id}/change-password', [AuthController::class, 'changePassword'])->name('password.change');
