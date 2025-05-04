<?php

use App\Http\Controllers\NewLearningPath;
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

Route::get('/home', function () {
    // try {
    //     $resultado = DB::connection('awsdb')->select('SELECT 1');
    //     // Se chegou aqui, conexão foi bem sucedida
    //     $awsOk = true;
    // } catch (\Exception $e) {
    //     $awsOk = false;
    //     $errorMessage = $e->getMessage();
    // }

    return Inertia::render('Dashboard',[
        'awsOk' => $awsOk ?? false,
        'awsError' => $errorMessage ?? null,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // form para criar trilhas de estudos (learning path)
    Route::get("/nova-trilha", [NewLearningPath::class, 'create'])->name('new-learning-path.create');
});

require __DIR__.'/auth.php';
