<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgressLearning extends Model
{
    protected $fillable = [
        'user_id',
        'learning_path_id',
        'finished_questions',
        'total_questions'
    ];
}
