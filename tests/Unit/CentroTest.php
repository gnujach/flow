<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use App\Models\Centro;
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

it('logged user with rol admin can view Centros index', function () {
    Centro::factory()->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get('/admin/centros/')->assertInertia(
        fn (Assert $page) => $page
            ->component('Centros/ListCentros')
            ->has('centros')
    );
    $response->assertStatus(200);
    $this->assertCount(1, Centro::all());
});

it('logged user can add centros', function () {
    $this->withoutExceptionHandling();
    $attributes = Centro::factory()->raw(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->post('/admin/centros/', $attributes);
    $response->assertStatus(302);
    $this->assertDatabaseHas('centros', $attributes);
    $this->assertDatabaseHas('centros', ['activo' => true]);
    $this->assertCount(1, Centro::all());
});

it('logged user can role Admin can edit Centro', function () {
    $this->withoutExceptionHandling();
    $attributes = Centro::factory()->create();
    $attributesUpdate = ['nombre' => 'Nuevo nombre', 'activo' => false];
    $response = $this->actingAs($this->user)->put("/admin/centros/{$attributes->uuid}/update", $attributesUpdate);
    $response->assertStatus(302);
    $this->assertDatabaseHas('centros', ['nombre' => 'Nuevo nombre']);
    $this->assertCount(1, Centro::all());
});
