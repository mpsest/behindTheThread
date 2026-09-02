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
use App\Http\Controllers\MisturaController;

Route::apiResource('espacos', EspacoController::class)
    ->only(['index', 'show']);

Route::apiResource('ferramentas', FerramentaController::class)
    ->only(['index', 'show']);

Route::apiResource('conteudos', ConteudoController::class)
    ->only(['index', 'show']);

Route::apiResource('dirty-talks', DirtyTalkController::class)
    ->only(['index', 'show', 'indexLatest', 'store']);

Route::apiResource('artigos', ArtigoController::class)
    ->only(['index', 'show', 'indexLatest', 'store']);

Route::apiResource('designers', DesignerController::class)
    ->only(['index', 'show', 'indexLatest', 'store']);

Route::apiResource('keywords', KeywordController::class)
    ->only(['index', 'show']);

Route::apiResource('misturas', MisturaController::class)
    ->only(['index', 'show', 'indexLatest']);

Route::post('/newsletter', [NewsletterController::class, 'store']);

Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])
    ->name('password.email');

Route::post('/reset-password', [AuthController::class, 'resetPassword'])
    ->name('password.update');

// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', fn (Request $request) => $request->user());

    Route::apiResource('espacos', EspacoController::class)
        ->except(['index', 'show']);

    Route::apiResource('ferramentas', FerramentaController::class)
        ->except(['index', 'show']);

    Route::apiResource('conteudos', ConteudoController::class)
        ->except(['index', 'show']);

    Route::apiResource('dirty-talks', DirtyTalkController::class)
        ->except(['index', 'show', 'indexLatest']);

    Route::put(
        '/dirty-talks/{id}/keywords',
        [DirtyTalkController::class, 'syncKeywords']
    );

    Route::apiResource('artigos', ArtigoController::class)
        ->except(['index', 'show', 'indexLatest']);

    // Guardar keywords escolhidas para o artigo
    Route::put(
        '/artigos/{id}/keywords',
        [ArtigoController::class, 'syncKeywords']
    );

    Route::apiResource('designers', DesignerController::class)
        ->except(['index', 'show', 'indexLatest']);

    Route::put(
        '/designers/{id}/keywords',
        [DesignerController::class, 'syncKeywords']
    );

    Route::apiResource('keywords', KeywordController::class)
        ->except(['index', 'show']);

    Route::apiResource('newsletter', NewsletterController::class)
        ->except(['store']);

    Route::apiResource('misturas', MisturaController::class)
    ->except(['index', 'show', 'indexLatest']);


    Route::get(
        '/utilizadores/{id}',
        [UtilizadorController::class, 'show']
    );

    Route::put(
        '/utilizadores/{id}',
        [UtilizadorController::class, 'update']
    );

    Route::post(
        '/utilizadores/{id}/change-password',
        [AuthController::class, 'changePassword']
    )->name('password.change');


    Route::middleware('admin')->group(function () {

        Route::get(
            '/utilizadores',
            [UtilizadorController::class, 'index']
        );

        Route::post(
            '/utilizadores',
            [UtilizadorController::class, 'store']
        );

        Route::delete(
            '/utilizadores/{id}',
            [UtilizadorController::class, 'destroy']
        );
    });
});
