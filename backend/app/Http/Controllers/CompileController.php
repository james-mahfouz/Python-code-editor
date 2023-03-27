<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompileController extends Controller
{
    public function compile(Request $request)
    {
        $pythonCode = $request->input('code');
        $output = "";
        exec("python -c'{$pythonCode}' 2> error.log", $outputArray, $returnCode);
        foreach ($outputArray as $line) {
            $output .= $line . "\n";
        }
        $error = "";
        if ($returnCode !== 0) {
            $error = file_get_contents('error.log');
        }
        return response()->json([
            'output' => $output,
            'error' => $error
        ]);
    }
}

