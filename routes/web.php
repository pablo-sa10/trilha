<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatGptController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NewLearningPathController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgressLearningController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
})->name('ladingPage');

Route::get('/home', [DashboardController::class, 'index']) 
    ->middleware(['auth', 'verified'])
    ->name('dashboard');
    

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // form para criar trilhas de estudos (learning path)
    Route::get("/nova-trilha", [NewLearningPathController::class, 'create'])->name('new-learning-path.create');
    Route::get("/trilhas/{id}", [NewLearningPathController::class, 'show'])->name('new-learning-path.show');
    Route::post("/nova-trilha", [NewLearningPathController::class, 'store'])->name('new-learning-path.store');

    Route::delete("/delete-trilha/{id}", [DashboardController::class, 'destroy'])->name('delete-learning-path.destroy');

    Route::patch("/atualiza-progress/{user}/{learningPath}/{finalizadas}", [ProgressLearningController::class, 'update'])->name('progress-learning-path.update');

    Route::post('/chat', [ChatGptController::class, 'sendAsk'])->name('chat-gpt.index');
});

Route::middleware(['role:admin'])->group(function () {
    Route::get('/adminpanel', [AdminController::class, 'index'])->name('admin.panel');
});

require __DIR__.'/auth.php';
