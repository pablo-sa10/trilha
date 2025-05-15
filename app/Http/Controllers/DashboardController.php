<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ProgressLearningController as ControllersProgressLearningController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Http\Controllers\ProgressLearningController;

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

        $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [ // busca as trilhas criadas pelo usuário
            'id_usuario' => $userId
        ]);

        $trilhas = $response->successful() ? $response->json() : []; // armazena na variável $trilhas o retorno da API

        if (!empty($trilhas)) {
            foreach ($trilhas as $trilha) {

                // Verifica se já existe um registro de progresso para a trilha
                $progress = (new ProgressLearningController)->getProgressLearning($trilha->id_trilha);

                Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/ListarQuestoesTrilha", [
                    'id_usuario' => $userId,
                    'id_trilha' => $trilha->id_trilha
                ]);
            }
        }

        dd($trilhas);

        return Inertia::render('Dashboard', [
            'trilhas' => $trilhas
        ]);
    }
}
