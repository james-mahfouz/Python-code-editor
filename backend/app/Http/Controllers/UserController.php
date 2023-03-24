<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Code;


class UserController extends Controller
{


    public function save_code(Request $request)
    {
        $user = Auth::user();

        $code = new Code;
        $code->code = $request->code;
        $code->title = $request->title;
        $code->users_id = $user->id;
        $code->save();

        return response()->json([
            "success" => true
        ]);
    }

    public function get_code($user_id)
    {
        $codes = Code::where('users_id', $user_id)->get();

        return response()->json([
            'success' => true,
            'data' => $codes
        ]);
    }

}
