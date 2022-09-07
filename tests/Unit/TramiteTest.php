<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Testing\Fluent\AssertableJson;
use App\Models\User;
use App\Models\Tramite;
use App\Models\Requisito;
use App\Models\Departamento;

beforeEach(function () {
    //Creamos el Rol y permisos asociados al usuario
    $adminRole = Role::create(['name' => 'Admin']);
    $adminPermissions = ['manage-system', 'manage users'];
    foreach ($adminPermissions as $ap) {
        $permission = Permission::create(['name' => $ap]);
        $adminRole->givePermissionTo($permission);
    }

    //Creamos el usuario
    $this->user = User::factory()->create();
    //Asignamos el usuario
    $this->user->assignRole($adminRole);
});

it('logged user with rol admin can view requisitos index', function () {
    Tramite::factory()->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get('/admin/tramites/');
    $response->assertStatus(200);
    $this->assertCount(1, Tramite::all());
});

it('logger user can add a new tramite with requisitos and task', function () {
    $requisitos = Requisito::factory(4)->create();
    $tramite = Tramite::factory()
        ->hasTareastramite(2)
        ->create(['by' => $this->user->id]);
    $tramite->requisitos()->attach($requisitos);
//    foreach ($requisitos as $requisito) {
//        $tramite->requisitos()->attach($requisito['id']);
//    }
    $response = $this->actingAs($this->user)->get('/admin/tramites/');
    $response->assertStatus(200);
    $this->assertCount(1, Tramite::all());
    $this->assertCount(4, Requisito::all());
    $this->assertCount(4, $tramite->requisitos()->get());
    $this->assertCount(2, $tramite->Tareastramite()->get());
});
it('logged user can show a tramite', function () {
    $tramite = Tramite::factory()
        ->hasTareastramite(2)
        ->has(Requisito::factory()->count(3))
        ->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get("/admin/tramites/{$tramite->uuid}/show");
    $response->assertStatus(200);
    $this->assertCount(1, Tramite::all());
    $response->assertJson(function (AssertableJson $json) {
        return $json->has('data');
    });
    $response
        ->assertJson(function (AssertableJson $json) {
//            dd($json);
            return $json->where('data.id', 1);
//                ->where('data.attributes.objetivo', 'Nuevo Objetivo');
//                ->whereNot('data.departamento_id', 2);
        }
        );
});

it('logger user with priveleges admin can modify a Tramite into general options test', function () {
    $tramite = Tramite::factory()
        ->hasTareastramite(2)
        ->has(Requisito::factory()->count(3))
        ->create(['by' => $this->user->id]);
    Departamento::factory(1)->create();
    $requisitos = Requisito::factory(5)->create();
    $attributesUpdate = [
        'nombre' => strtoupper('Nuevo trámite'),
        'objetivo' => strtoupper('Nuevo Objetivo'),
        'fundamento_jur' => strtoupper('Nuevo fundamento_jur'),
        'tipo_usuario' => 'interno',
        'plazo_respuesta' => 1,
        'departamento_id' => 1,
        'requisitos' => $requisitos,
        'costo' => 0,
        'activo' => false,
    ];
//Falta verificar si hay requisitos y entonces actualizar

    $response = $this->actingAs($this->user)->put("/admin/tramites/{$tramite->uuid}/update", $attributesUpdate);
    $this->assertCount(1, Tramite::all());
    $this->assertCount(5, $tramite->requisitos()->get());
    $this->assertCount(2, $tramite->Tareastramite()->get());
    $response->assertStatus(302);

});
