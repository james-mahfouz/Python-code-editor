<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompileController extends Controller
{
    public function compile(Request $request)
    {
        $pythonCode = $request->input('code');
        $output = "";
        exec("python -c '{$pythonCode}'", $outputArray);
        foreach ($outputArray as $line) {
            $output .= $line . "\n";
        }
        return response()->json(['output' => $output]);
    }
}
