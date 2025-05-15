<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NewLearningPathController;
use App\Http\Controllers\ProfileController;
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
});

require __DIR__.'/auth.php';
