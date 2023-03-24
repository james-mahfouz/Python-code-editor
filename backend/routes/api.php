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
<<<<<<< HEAD
        Route::get('/get_developers', [UserController::class, "getDevelopers"]);
        Route::post('/save_code', [UserController::class, "saveCode"]);
        Route::get('/codes/{user_id}',[UserController::class, "getCode"]);
        Route::get('/get_all_users', [AdminController::class, "getAllUsers"]);

=======
        Route::get('/get_developers', [UserController::class, "get_developers"]);
        Route::post('/save_code', [UserController::class, "save_code"]);
        Route::post('/chats/{from_user_id}/{to_user_id}', [UserController::class, "send_message"]);
        Route::get('/get_all_users', [AdminController::class, "get_all_users"]);
        Route::get('/codes/{user_id}',[UserController::class, "get_code"]);
>>>>>>> 923f78ddec7276d9d87f045490832f73ef019d02
    });

    Route::post('/compile', [CompileController::class, "compile"]);
});