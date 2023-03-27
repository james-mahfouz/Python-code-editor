<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Code;
use App\Models\Chat;



class UserController extends Controller
{
    public function verify(){
        $user = Auth::user();
        if ($user){
            return response()->json([
            "success" => true
            ]);
        }
        else{
            return response()->json([
            "success" => false
            ]);
        }
        
    }

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
    public function get_all_users()
    {
        //$user = Auth::user();
        // ->where('id', '!=', $user->id)
        $users = User::select()->get();
        return response()->json([
            'users' => $users
        ]);
    }
    public function get_developers(Request $request)
    {   
        $name = $request->name;
        $users = User::where('name', 'like', '%'.$name.'%')->get();
        return response()->json([
            'users' => $users
        ]);
    }
    public function send_message(Request $request, $to_user_id)
    {
        $text = $request->input('text');
        $user = Auth::user();
        $chat = new Chat([
            'from' => $user->id,
            'to' => $to_user_id,
            'text' => $text
        ]);
        $chat->save();

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);
    }

    public function show_messages()
    {
        $user = Auth::user();
        $message = Chat::select('from', 'text')->where('to', $user->id)->get();

        return response()->json([
            'success' => true,
            'data' => $message
        ]);


    }

    public function get_code()
    {
        $user = Auth::user();
        $codes = Code::select('id', 'title', 'code')->where('users_id', $user->id)->get();

        return response()->json([
            'success' => true,
            'data' => $codes
        ]);
    }
}