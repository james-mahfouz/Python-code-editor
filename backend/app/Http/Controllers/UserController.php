<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    
    public function getAllUsers()
    {
        return User::all();
        // Alltable('users')->get();
        // return $users;
    }

}
