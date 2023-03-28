<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompileController extends Controller
{
    // public function compile(Request $request)
    // {
    //     $pythonCode = $request->input('code');
    //     $output = "";
    //     exec("python -c'{$pythonCode}' 2> error.log", $outputArray, $returnCode);
    //     foreach ($outputArray as $line) {
    //         $output .= $line . "\n";
    //     }
    //     $error = "";
    //     if ($returnCode !== 0) {
    //         $error = file_get_contents('error.log');
    //     }
    //     return response()->json([
    //         'output' => $output,
    //         'error' => $error
    //     ]);
    // }


// HAYDA ALTERNATIVE CODE FOR THE ABOVE CODE PLEASE 7AWEL JARBO EZA MA3AK WA2ET LEAN ANA METET 5ALAS :') 

public function compile(Request $request)
{
    $pythonCode = $request->input('code');
    $output = "";
    $error = "";
    
    // Create a subprocess and execute the Python command
    $process = proc_open("python -c '{$pythonCode}'", [['pipe', 'r'], ['pipe', 'w'], ['pipe', 'w']], $pipes);
    
    if (is_resource($process)) {
        // Get the output and error from the subprocess
        $output = stream_get_contents($pipes[1]);
        $error = stream_get_contents($pipes[2]);
        
        // Close the subprocess and pipes
        fclose($pipes[0]);
        fclose($pipes[1]);
        fclose($pipes[2]);
        proc_close($process);
    }
    
    return response()->json([
        'output' => $output,
        'error' => $error
    ]);
}
}