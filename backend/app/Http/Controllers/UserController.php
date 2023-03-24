<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    
    public function getAllUsers()
    {
        $user = Auth::user();
        $users = User::select('id', 'name')->where('id', '!=', $user->id)->get();
        return response()->json([
            'users' => $users
        ]);
    }

    

}
