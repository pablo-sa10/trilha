<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProgressLearning;

class ProgressLearningController extends Controller
{
    public function getProgressLearning($id){

        $progress = ProgressLearning::find($id);

        return $progress;
    }

    public function storeProgrssLearning($id_trilha, $id_usuario, $questoes_totais){

        $progress = ProgressLearning::create([
            'user_id' => $id_usuario,
            'learning_path_id' => $id_trilha,
            'total_questions' => $questoes_totais,
        ]);

        return $progress;
    }
}
