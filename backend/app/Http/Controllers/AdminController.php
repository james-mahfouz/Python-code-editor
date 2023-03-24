<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function get_all_users()
    {
        $user = Auth::user();

        if($user->is_admin=1){
            $users = User::select('id', 'name')->where('id', '!=', $user->id)->get();
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
