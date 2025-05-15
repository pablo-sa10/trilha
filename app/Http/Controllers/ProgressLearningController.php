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
}
