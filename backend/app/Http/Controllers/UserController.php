<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use App\Model\Code;


class UserController extends Controller
{
    
    public function get_all_users()
    {
        $user = Auth::user();
        $users = User::select('id', 'name')->where('id', '!=', $user->id)->get();
        return response()->json([
            'users' => $users
        ]);
    }

    public function save_code(Request $request)
    {
        $user = Auth::user();

        $code = new Code;
        $code->code = $request->code;
        $code->users_id = $user->id;
        $code->save();

        return response()->json([
            "success" => true
        ]);
    }
}
