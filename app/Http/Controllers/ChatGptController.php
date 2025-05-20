<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Psy\CodeCleaner\ReturnTypePass;

class ChatGptController extends Controller
{
    public function sendAsk(Request $request)
    {

        try {
            $response = Http::withToken(env('OPENAI_API_KEY'))
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => 'gpt-3.5-turbo',
                    'messages' => [
                        ['role' => 'user', 'content' => $request->message]
                    ],
                ]);

            if ($response->failed()) {
                return response()->json([
                    'error' => 'Erro ao enviar a pergunta para o ChatGPT'
                ], 500);
            }

            return response()->json([
                'response' => $response->json()['choices'][0]['message']['content']
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => "Erro ao enviar a pergunta para o ChatGPT $e"
            ], 500);
        }
    }
}
