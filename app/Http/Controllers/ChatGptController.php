<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatGptController extends Controller
{
    public function sendAsk(Request $request)
    {
        try{
            $response = Http::withToken(env('OPENAI_API_KEY'))
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => 'gpt-3.5-turbo',
                    'messages' => [
                        [
                            'role' => 'user',
                            'content' => $request->input('message')
                        ]
                    ],
                    'temperature' => 0.7,
                ]);

            if($response->failed()){
                return redirect()->back()->with('error', 'Erro ao enviar a pergunta: ' . $response->body());
            }

            return response()->json([
                'response' => $response->json()
            ]);

        }catch(\Exception $e){
            return redirect()->back()->with('error', 'Erro ao enviar a pergunta: ' . $e->getMessage());
        }
    }
}
