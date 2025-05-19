<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Http\Controllers\ProgressLearningController;
use App\Models\ProgressLearning;

class DashboardController extends Controller
{
    public function index(Request $request)
    {

        $userId = $request->user()->id;

        /** 
         * O primeiro passo é trazer as trilhas já criada pelo usuário
         * 
         * É feito um foreach para cada trilha;
         * dentro do foreach têm três etapas:
         * 
         * 1. verifico no banco se ja há registro de progresso para a trilha
         * 2. se não houver, insiro no banco pela primeira vez, (id do usuário, id da trilha, 0 de questões finalizadas e 0 de questões totais)
         * 3. logo após, é buscado o progresso de cada trilha, armazenado num array e exibido na view
         */

        try {
            $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [ // busca as trilhas criadas pelo usuário
                'id_usuario' => $userId
            ]);

            $trilhas = $response->successful() ? $response->json() : []; // armazena na variável $trilhas o retorno da API
            $allProgress = []; // array para armazenar o progresso de cada trilha

            if (!empty($trilhas)) {

                foreach ($trilhas as $trilha) {

                    // Verifica se já existe um registro de progresso para a trilha
                    $progress = $this->getProgress($userId, $trilha['id_trilha']);
                    $allProgress[] = $progress;
                }
            }

            return Inertia::render('Dashboard', [
                'trilhas' => $trilhas,
                'progress' => $allProgress
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
        }
    }

    private function getProgress($userId, $trilhaId)
    {
        $progress = ProgressLearning::where([
            ['user_id', '=', $userId],
            ['learning_path_id', '=', $trilhaId]
        ])->first();

        // Busca as questões da trilha via API
        $questoes = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/ListarQuestoesTrilha", [
            'id_usuario' => $userId,
            'id_trilha' => $trilhaId
        ]);

        $questoesArray = $questoes->successful() ? ($questoes->json()['questoes'] ?? []) : [];
        $questoesTotais = count($questoesArray);

        // Se ainda não existir progresso, cria um novo
        if (empty($progress)) {
            $createProgress = ProgressLearning::create([
                'user_id' => $userId,
                'learning_path_id' => $trilhaId,
                'total_questions' => $questoesTotais,
            ]);

            return [
                'id_trilha' => $trilhaId,
                'finished_questions' => 0,
                'total_questions' => $createProgress->total_questions
            ];
        }

        // Se já existe, mas o total de questões mudou, atualiza
        if ($progress->total_questions != $questoesTotais) {
            $progress->total_questions = $questoesTotais;
            $progress->save(); // atualiza com Eloquent direto

            return [
                'id_trilha' => $trilhaId,
                'finished_questions' => $progress->finished_questions,
                'total_questions' => $progress->total_questions
            ];
        }

        // Se não mudou nada, retorna o progresso atual
        return [
            'id_trilha' => $trilhaId,
            'finished_questions' => $progress->finished_questions,
            'total_questions' => $progress->total_questions
        ];
    }

    public function destroy(int $id, Request $request)
    {

        $userId = $request->user()->id;

        try {
            $url = "https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/RemoverTrilha";

            $query = http_build_query([
                "id_usuario" => $userId,
                "id_trilha" => $id,
            ]);

            $response = Http::delete("$url?$query");

            if ($response->failed()) {
                return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
            }

            return redirect(route('dashboard', absolute: false));
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
        }
    }
}
