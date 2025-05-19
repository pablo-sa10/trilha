<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProgressLearning;

class ProgressLearningController extends Controller
{
    public function getProgressLearning($id)
    {

        $progress = ProgressLearning::find($id);

        return $progress;
    }

    public function store(int $id_usuario, int $id_trilha, int $totalQuestion)
    {

        $progress = ProgressLearning::where([
            ['user_id', '=', $id_usuario],
            ['learning_path_id', '=', $id_trilha]
        ])->first();

        $progress->finished_questions = $totalQuestion;
        $progress->save(); // atualiza com Eloquent direto

        return response()->noContent();
    }
}
