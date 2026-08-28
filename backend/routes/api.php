<?php

use App\Http\Controllers\ContentController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\SpaceController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('spaces', SpaceController::class);
Route::apiResource('tools', ToolController::class);
Route::apiResource('contents', ContentController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('newsletter', NewsletterController::class);

// Laravel Sanctum
Route::middleware('auth:sanctum')->group(function () {
      Route::get('/user', fn (Request $request) => $request->user());
  });
