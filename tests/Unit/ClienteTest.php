<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use App\Models\Cliente;
use App\Models\User;

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

it('logged user with rol admin can view clientes index', function () {
    Cliente::factory()->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get('/admin/clientes/')->assertInertia(
        fn (Assert $page) => $page
            ->component('Clientes/ListClientes')
            ->has('clientes')
    );
    $response->assertStatus(200);
    $this->assertCount(1, Cliente::all());
});

it('logged user can add clientes', function () {
    $this->withoutExceptionHandling();
    $attributes = Cliente::factory()->raw(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->post('/admin/clientes/', $attributes);
    $response->assertStatus(302);
    $this->assertDatabaseHas('clientes', $attributes);
    $this->assertCount(1, Cliente::all());
});
it('logged user can role Admin can edit cliente', function () {
    $this->withoutExceptionHandling();
    $attributes = Cliente::factory()->create();
    $attributesUpdate = ['nombre' => 'Nuevo nombre'];
    $response = $this->actingAs($this->user)->put("/admin/clientes/{$attributes->uuid}/update", $attributesUpdate);
    $response->assertStatus(302);
    $this->assertCount(1, Cliente::all());
});

it('logged user can find clients', function () {
    // $this->withoutExceptionHandling();
    $response = $this->actingAs($this->user)->get("/admin/clientes/search/");
    $response->assertStatus(200);
    // $this->assertCount(1, Cliente::all());
});
