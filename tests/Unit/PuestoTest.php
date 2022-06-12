<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use App\Models\Puesto;
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


it('logged user with rol admin can view puestos index', function () {
    Puesto::factory()->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get('/admin/puestos/')->assertInertia(
        fn (Assert $page) => $page
            ->component('Puestos/ListPuestos')
            ->has('puestos')
    );
    $response->assertStatus(200);
    $this->assertCount(1, Puesto::all());
});

it('logged user can add puestos', function () {
    $this->withoutExceptionHandling();
    $attributes = Puesto::factory()->raw(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->post('/admin/puestos/', $attributes)->assertInertia(
        fn (Assert $page) => $page
            ->component('Puestos/CreatePuesto')
            ->has('puesto')
    );
    $response->assertStatus(200);
    $this->assertDatabaseHas('puestos', $attributes);
    $this->assertCount(1, Puesto::all());
});

it('logged user can role Admin can edit puesto', function () {
    $this->withoutExceptionHandling();
    $attributes = Puesto::factory()->create();
    $attributesUpdate = ['nombre' => 'Nuevo nombre', 'active' => false];
    // $response = $this->actingAs($this->user)->put("/admin/puestos/{$attributes->uuid}/update", $attributesUpdate);
    $response = $this->actingAs($this->user)->put('admin/puestos/' . $attributes->uuid . '/update', $attributesUpdate)->assertInertia(
        fn (Assert $page) => $page
            ->component('Puestos/EditPuesto')
            ->has('puesto')
    );
    $response->assertStatus(200);
    $this->assertCount(1, Puesto::all());
});
