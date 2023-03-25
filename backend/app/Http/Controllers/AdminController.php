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

        if($user->is_admin==1){
            $users = User::select()->where('id', '!=', $user->id)->get();
            return response()->json([
                'users' => $users
            ]);
        }
        else{
            return response() -> json([
                'message' => "you are not the admin"
            ]);
        }
    }
}
