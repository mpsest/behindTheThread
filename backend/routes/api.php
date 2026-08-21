<?php

use App\Http\Controllers\ConteudoController;
use App\Http\Controllers\EspacoController;
use App\Http\Controllers\FerramentaController;
use App\Http\Controllers\UtilizadorController;
use Illuminate\Support\Facades\Route;

Route::apiResource('espacos', EspacoController::class);
Route::apiResource('ferramentas', FerramentaController::class);
Route::apiResource('conteudos', ConteudoController::class);
Route::apiResource('utilizadores', UtilizadorController::class);
