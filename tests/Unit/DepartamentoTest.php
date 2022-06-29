<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use App\Models\Departamento;
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

it('logged user with rol admin can view departamentos index', function () {
    Departamento::factory()->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get('/admin/departamentos/')->assertInertia(
        fn (Assert $page) => $page
            ->component('Departamentos/ListDepartamentos')
            ->has('departamentos')
    );
    $response->assertStatus(200);
    $this->assertCount(1, Departamento::all());
});

it('logged user can add departamentos', function () {
    $this->withoutExceptionHandling();
    $attributes = Departamento::factory()->raw(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->post('/admin/departamentos/', $attributes);
    // $response = $this->actingAs($this->user)->post('/admin/departamentos/', $attributes)->assertInertia(
    //     fn (Assert $page) => $page
    //         ->component('departamentos/CreateDepartamento')
    // );
    $response->assertStatus(302);
    $this->assertDatabaseHas('departamentos', $attributes);
    $this->assertCount(1, Departamento::all());
});

it('logged user can role Admin can edit Departamento', function () {
    // $this->withoutExceptionHandling();
    $attributes = Departamento::factory()->create();
    $attributesUpdate = ['nombre' => 'Nuevo nombre', 'activo' => false];
    $response = $this->actingAs($this->user)->put("/admin/departamentos/{$attributes->uuid}/update", $attributesUpdate);
    $response->assertStatus(302);
    //requerimos una validacion donde el nombre que hay bd sea igual al de $attributesUpdate
    $this->assertDatabaseHas('departamentos', ['nombre' => 'Nuevo nombre']);
    $this->assertCount(1, Departamento::all());
});
