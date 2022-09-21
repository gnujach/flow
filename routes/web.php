<?php

use App\Http\Controllers\SolicitudController;
use App\Http\Controllers\TramiteController;
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
use App\Http\Controllers\DepartamentoController;
use App\Http\Controllers\CentroController;
use App\Http\Controllers\RequisitoController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/tasks', function () {
    return Inertia::render('Task');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/solicitudes', [SolicitudController::class, 'create'])->name('solicitudes');
Route::middleware(['auth:sanctum', 'verified'])->post('/solicitudes/store', [SolicitudController::class, 'store'])->name('solicitudes/store');
Route::get('/request', [SolicitudController::class, 'recaptcha'])->name('request');
Route::middleware(['auth:sanctum', 'verified'])->get('/solicitudes/list', [SolicitudController::class, 'index'])->name('list');

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
    Route::get('/usuarios/', [UserController::class, 'index'])->name('usuarios/');
    Route::put('/usuarios/{user:uuid}/update', [Usercontroller::class, 'update'])->name('usuarios/update');
    Route::put('/usuarios/{user:uuid}/updatedatostrabajo', [Usercontroller::class, 'updateTrabajo'])->name('usuarios/updatedatostrabajo');
    Route::get('/usuarios/{user:uuid}/edit', [Usercontroller::class, 'edit'])->name('usuarios/edit');
    Route::put('/usuarios/{user:uuid}/updateroles', [Usercontroller::class, 'updateRoles'])->name('usuarios/updateroles');
    Route::get('/roles/show', [Usercontroller::class, 'showroles'])->name('roles.show');

    //Administrar Puestos de Trabajo
    Route::get('/puestos/', [PuestoController::class, 'index'])->name('puestos/');
    Route::get('/puestos/create', [Puestocontroller::class, 'create'])->name('puestos/create');
    Route::get('/puestos/{puesto:uuid}/edit', [Puestocontroller::class, 'edit'])->name('puestos/edit');
    Route::post('/puestos/', [Puestocontroller::class, 'store'])->name('puestos/store');
    Route::put('/puestos/{puesto:uuid}/update', [Puestocontroller::class, 'update'])->name('puestos/update');
    //Administrar Departamentos de Trabajo
    Route::get('/departamentos/', [DepartamentoController::class, 'index'])->name('departamentos/');
    Route::get('/departamentos/create', [DepartamentoController::class, 'create'])->name('departamentos/create');
    Route::get('/departamentos/{departamento:uuid}/edit', [Departamentocontroller::class, 'edit'])->name('departamentos/edit');
    Route::post('/departamentos/', [Departamentocontroller::class, 'store'])->name('departamentos/store');
    Route::put('/departamentos/{departamento:uuid}/update', [Departamentocontroller::class, 'update'])->name('departamentos/update');
    //Administrar Clientes
    Route::get('/clientes/', [ClienteController::class, 'index'])->name('clientes/');
    Route::get('/clientes/create', [ClienteController::class, 'create'])->name('clientes/create');
    Route::get('/clientes/getlast', [ClienteController::class, 'getlast'])->name('clientes/getlast');
    Route::get('/clientes/search', [ClienteController::class, 'search'])
        ->name('clientes.search');
    Route::post('/clientes/', [Clientecontroller::class, 'store'])->name('clientes/store');
    Route::put('/clientes/{cliente:uuid}/update', [Clientecontroller::class, 'update'])->name('clientes/update');
    //Administrar Centros de Trabajo
    Route::get('/centros/', [CentroController::class, 'index'])->name('centros/');
    Route::get('/centros/create', [CentroController::class, 'create'])->name('centros/create');
    Route::get('/centros/{centro:uuid}/edit', [CentroController::class, 'edit'])->name('centros/edit');
    Route::post('/centros/', [Centrocontroller::class, 'store'])->name('centros/store');
    Route::put('/centros/{centro:uuid}/update', [Centrocontroller::class, 'update'])->name('centros/update');
    //Administrar Requisitos
    Route::get('/requisitos/', [RequisitoController::class, 'index'])->name('requisitos/');
    Route::get('/requisitos/create', [RequisitoController::class, 'create'])->name('requisitos/create');
    Route::get('/requisitos/{requisito:uuid}/edit', [RequisitoController::class, 'edit'])->name('requisitos/edit');
    Route::post('/requisitos', [RequisitoController::class, 'store'])->name('requisitos/store');
    Route::put('/requisito/{requisito:uuid}/update', [Requisitocontroller::class, 'update'])->name('requisitos/update');
    // Rutas de Tramites
    Route::get('/tramites/', [TramiteController::class, 'index'])->name('tramites/');
    Route::get('/tramites/create', [TramiteController::class, 'create'])->name('tramites/create');
    Route::get('/tramites/{tramite:uuid}/edit', [TramiteController::class, 'edit'])->name('tramites/edit');
    Route::get('/tramites/{tramite:uuid}/show', [TramiteController::class, 'show'])->name('tramites/show');
    Route::post('/tramites', [TramiteController::class, 'store'])->name('tramites/store');

    Route::put('/tramites/{tramite:uuid}/update', [Tramitecontroller::class, 'update'])->name('tramites/update');

});

Route::get('/auth/facebook', [SocialController::class, 'redirectFacebook']);
Route::get('/auth/facebook/callback', [SocialController::class, 'callbackFacebook']);
Route::get('/login/azure', '\App\Http\Middleware\Azure@azure');
Route::get('/login/azurecallback', '\App\Http\Middleware\Azure@azurecallback');
