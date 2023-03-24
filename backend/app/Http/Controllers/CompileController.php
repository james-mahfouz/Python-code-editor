<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompileController extends Controller
{
    public function compile(Request $request)
    {
        $pythonCode = $request->input('code');
        $output = exec("python -c '{$pythonCode}' 2>&1");
        return response()->json(['output' => $output]);
    }
}
