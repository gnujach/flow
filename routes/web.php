<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PacienteController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/users', function () {
    return Inertia::render('Users', [
        'users' => json_encode(array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5))
    ]);
});
Route::get('/settings', function () {
    return Inertia::render('Settings',);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/tasks', function () {
    return Inertia::render('Task');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/solicitudes', function () {
    return Inertia::render('Solicitudes');
})->name('solicitues');

Route::middleware(['auth:sanctum', 'verified'])->get('/dialog', function () {
    return Inertia::render('Dialog');
})->name('dialog');
Route::middleware(['auth:sanctum', 'verified'])->get('/pacientes/search', [PacienteController::class, 'search'])
    ->name('pacientes.search');
