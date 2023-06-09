<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompileController;
use App\Http\Controllers\UserController;
use App\http\Controllers\AdminController;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/login', [AuthController::class, "login"]);
        Route::post('/signup', [AuthController::class, "register"]);
        Route::post('/refresh', [AuthController::class, "refresh"]);
    });

    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('/logout', [AuthController::class, "logout"]);
        Route::post('/get_developers', [UserController::class, "get_developers"]);
        Route::get('/get_all_user_user', [UserController::class, "get_all_users"]);
        Route::get('/get_all_user_admin', [AdminController::class, "get_all_users"]);
        Route::post('/save_code', [UserController::class, "save_code"]);
        Route::post('/chats/{to_user_id}', [UserController::class, "send_message"]);
        Route::get('/show_messages', [UserController::class, "show_messages"]);
        Route::get('/get_message/{user_id}', [UserController::class, "recieve_message"]);


        Route::get('/get_code',[UserController::class, "get_code"]);

    });
    Route::get('/verify', [UserController::class, "verify"]);
    Route::post('/compile', [CompileController::class, "compile"]);
});
