<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    
    public function getAllUsers()
    {
        $users = User::select('id', 'name')->get();
        return response()->json([
            'users' => $users
        ]);
    }

}
