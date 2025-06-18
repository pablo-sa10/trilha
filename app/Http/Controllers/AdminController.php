<?php

namespace App\Http\Controllers;

use App\Models\ProgressLearning;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AdminController extends Controller
{
    //
    public function index(Request $request)
    {

        $userId = $request->user()->id;

        try {
            $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [ // busca as trilhas criadas pelo usuário
                'id_usuario' => $userId
            ]);

            $trilhas = $response->successful() ? $response->json() : []; // armazena na variável $trilhas o retorno da API
            $users = $this->progressAllUser();

            return Inertia::render('AdministrativePanel', [
                'trilhas' => $trilhas,
                'users' => $users
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
        }
    }

    private function progressAllUser(): array
    {

        $users = User::all(); // busca todos os users
        $usersProgress = [];

        foreach ($users as $key => $user) {
            $progress = ProgressLearning::where('user_id', $user->id)->get(); // traz o progresso de cada user
            $progressUser = $progress->toArray();

            $concluidas = 0;
            foreach ($progressUser as $progress) {
                if ($progress["finished_questions"] == $progress["total_questions"] && $progress["total_questions"] != 0) {
                    $concluidas++;
                }
            }

            $usersProgress[] = [ // usar array simples, pois vamos ordenar depois
                "user" => $user->toArray(),
                "concluidas" => $concluidas
            ];
        }

        usort($usersProgress, function ($a, $b) {
            return $b["concluidas"] <=> $a["concluidas"];
        });

        return $usersProgress;
    }
}
