<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgressLearning extends Model
{
    protected $table = 'progress_learning';
    
    protected $fillable = [
        'user_id',
        'learning_path_id',
        'finished_questions',
        'total_questions'
    ];
}
