<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function get_all_users()
    {
        $user = Auth::user();
        $users = User::select('id', 'name')->where('id', '!=', $user->id)->get();
        return response()->json([
            'users' => $users
        ]);
    }
}
