<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Code;
use App\Models\Chat;



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

    public function send_message(Request $request, $from_user_id, $to_user_id)
    {
        $text = $request->input('text');
        $chat = new Chat([
           'from' => $from_user_id,
           'to' => $to_user_id,
           'text' => $text
        ]);
        $chat->save();

        return response()->json([
           'success' => true,
           'message' => 'Message sent successfully'
        ]);
    }
    public function get_developers(Request $request, $name)
    {
        $users=
        $users = User::where('name', 'like', '%'.$name.'%')->get();
        return response()->json([
            'users' => $users
        ]);
    }
}
