<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\MedioController;
use App\Http\Controllers\AzureController;
use App\Http\Controllers\CategoriaRequisitoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PuestoController;
use App\Http\Controllers\ClienteController;
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

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/tasks', function () {
    return Inertia::render('Task');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/solicitudes', function () {
    return Inertia::render('Solicitudes');
})->name('solicitudes');

Route::middleware(['auth:sanctum', 'verified'])->get('/dialog', function () {
    return Inertia::render('Dialog');
})->name('dialog');
Route::middleware(['auth:sanctum', 'verified'])->get('/pacientes/search', [PacienteController::class, 'search'])
    ->name('pacientes.search');
Route::middleware('auth:sanctum')->name('admin.')->prefix('admin')->group(function () {
    Route::get('/pacientes/', [Pacientecontroller::class, 'index'])->name('pacientes/');
    Route::get('/pacientes/create', [Pacientecontroller::class, 'create'])->name('pacientes/create');
    Route::post('/pacientes', [Pacientecontroller::class, 'store'])->name('pacientes/store');
});

Route::middleware('auth:sanctum')->name('admin.')->prefix('admin')->group(function () {
    Route::get('/medios/', [Mediocontroller::class, 'index'])->name('medios/');
    Route::get('/medios/create', [Mediocontroller::class, 'create'])->name('medios/create');
    Route::get('/medios/{medio:uuid}/edit', [Mediocontroller::class, 'edit'])->name('medios/edit');
    Route::put('/medios/{medio:uuid}/update', [Mediocontroller::class, 'update'])->name('medios/update');
    Route::post('/medios', [Mediocontroller::class, 'store'])->name('medios/store');
    //categoria Requisito
    Route::get('/categorias_requisito/', [CategoriaRequisitocontroller::class, 'index'])->name('categoriarequisitos/');
    Route::post('/categorias_requisito/', [CategoriaRequisitocontroller::class, 'store'])->name('categoriarequisitos/store');
    Route::put('/categorias_requisito/{categoriarequisito:uuid}/update', [CategoriaRequisitocontroller::class, 'update'])->name('categoriarequisitos/update');
    Route::delete('/categorias_requisito/{uuid}/delete', [CategoriaRequisitocontroller::class, 'destroy'])->name('categoriarequisitos/delete');
    //Administrar usuarios
    Route::get('/usuarios/', [UserController::class, 'index'])->name('usuarios.index/');
    Route::put('/usuarios/{user:uuid}/update', [Usercontroller::class, 'update'])->name('usuarios/update');
    Route::get('/usuarios/{user:uuid}/edit', [Usercontroller::class, 'edit'])->name('usuarios/edit');

    //Administrar Puestos de Trabajo
    Route::get('/puestos/', [PuestoController::class, 'index'])->name('puestos/');
    Route::get('/puestos/create', [Puestocontroller::class, 'create'])->name('puestos/create');
    Route::get('/puestos/{puesto:uuid}/edit', [Puestocontroller::class, 'edit'])->name('puestos/edit');
    Route::post('/puestos/', [Puestocontroller::class, 'store'])->name('puestos/store');
    Route::put('/puestos/{puesto:uuid}/update', [Puestocontroller::class, 'update'])->name('puestos/update');
    //Administrar Clientes
    Route::get('/clientes/', [ClienteController::class, 'index'])->name('clientes/');
    Route::get('/clientes/search', [ClienteController::class, 'search'])
        ->name('clientes.search');
    Route::post('/clientes/', [Clientecontroller::class, 'store'])->name('clientes/store');
    Route::put('/clientes/{cliente:uuid}/update', [Clientecontroller::class, 'update'])->name('clientes/update');
});

Route::get('/auth/facebook', [SocialController::class, 'redirectFacebook']);
Route::get('/auth/facebook/callback', [SocialController::class, 'callbackFacebook']);
Route::get('/login/azure', '\App\Http\Middleware\Azure@azure');
Route::get('/login/azurecallback', '\App\Http\Middleware\Azure@azurecallback');
