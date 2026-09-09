<?php

use App\Http\Controllers\ArtigoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConteudoController;
use App\Http\Controllers\DesignerController;
use App\Http\Controllers\DirtyTalkController;
use App\Http\Controllers\EspacoController;
use App\Http\Controllers\FerramentaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KeywordController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\UtilizadorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MisturaController;

Route::get('/home/latest', [HomeController::class, 'latest']);

Route::apiResource('espacos', EspacoController::class)
    ->only(['index', 'show']);

Route::apiResource('ferramentas', FerramentaController::class)
    ->only(['index', 'show']);

Route::apiResource('conteudos', ConteudoController::class)
    ->only(['index', 'show']);

Route::apiResource('dirty-talks', DirtyTalkController::class)
    ->only(['index', 'show', 'indexLatest']);

Route::apiResource('artigos', ArtigoController::class)
    ->only(['index', 'show', 'indexLatest']);

Route::apiResource('designers', DesignerController::class)
    ->only(['index', 'show', 'indexLatest']);

Route::apiResource('keywords', KeywordController::class)
    ->only(['index', 'show']);

Route::apiResource('misturas', MisturaController::class)
    ->only(['index', 'show'])
    ->whereNumber('mistura');

Route::get('/misturas-latest', [MisturaController::class, 'indexLatest']);

Route::post('/misturas', [MisturaController::class, 'store']);

Route::post('/newsletter', [NewsletterController::class, 'store']);
Route::get('/newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe']);

Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])
    ->name('password.email');

Route::post('/reset-password', [AuthController::class, 'resetPassword'])
    ->name('password.update');

Route::get('/reset-password/validate', [AuthController::class, 'validateResetToken']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', fn(Request $request) => $request->user());

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

    Route::get('/misturas/nao-lidas/count', [MisturaController::class, 'naoLidasCount']);

    Route::get('/misturas/pendentes', [MisturaController::class, 'pendentes']);

    Route::patch('/misturas/{id}/lida', [MisturaController::class, 'marcarLida']);

    Route::patch('/misturas/{id}/aprovar', [MisturaController::class, 'aprovar']);

    Route::apiResource('misturas', MisturaController::class)
        ->only(['update', 'destroy'])
        ->whereNumber('mistura');

    Route::get(
        '/utilizadores',
        [UtilizadorController::class, 'index']
    );

    Route::get(
        '/utilizadores/{id}',
        [UtilizadorController::class, 'show']
    );

    Route::put(
        '/utilizadores/{id}',
        [UtilizadorController::class, 'update']
    );

    Route::delete(
        '/utilizadores/{id}',
        [UtilizadorController::class, 'destroy']
    );

    Route::post(
        '/utilizadores/{id}/change-password',
        [AuthController::class, 'changePassword']
    )->name('password.change');


    Route::middleware('admin')->group(function () {

        Route::post(
            '/utilizadores',
            [UtilizadorController::class, 'store']
        );

        Route::post(
            '/newsletter/send',
            [NewsletterController::class, 'send']
        );
    });
});
