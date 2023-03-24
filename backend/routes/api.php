<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompileController;
use App\Http\Controllers\UserController;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/login', [AuthController::class, "login"]);
        Route::post('/signup', [AuthController::class, "register"]);
        Route::post('/refresh', [AuthController::class, "refresh"]);
    });

    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('/logout', [AuthController::class, "logout"]);
        Route::get('/get_all_users', [UserController::class, "get_all_users"]);
        Route::post('/save_code', [UserController::class, "save_code"]);
<<<<<<< HEAD

        Route::get('/codes/{user_id}',[UserController::class, "get_code"]);

=======
>>>>>>> 92aee76f83cf1cad6c81b79810795249e4dfa6c3
    });

    Route::post('/compile', [CompileController::class, "compile"]);
});
