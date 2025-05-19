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

    public function update(int $id_usuario, int $id_trilha, int $finalizadas)
    {

        // dd([$id_usuario, $id_trilha, $finalizadas]);
        $progress = ProgressLearning::where([
            ['user_id', '=', $id_usuario],
            ['learning_path_id', '=', $id_trilha]
        ])->first();

        // dd($progress);
        $progress->finished_questions = $finalizadas + 1;
        $progress->save(); // atualiza com Eloquent direto

        // return response()->noContent();
    }
}
