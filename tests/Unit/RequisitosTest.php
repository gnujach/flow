<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use App\Models\User;
use App\Models\Requisito;
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
    Requisito::factory()->create(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->get('/admin/requisitos/')->assertInertia(
        fn (Assert $page) => $page
            ->component('Requisitos/ListRequisitos')
            ->has('requisitos')
    );
    $response->assertStatus(200);
    $this->assertCount(1, Requisito::all());
});

it('logged user can add requisitos', function() {
    $this->withoutExceptionHandling();
    $attributes = Requisito::factory()->raw(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->post('/admin/requisitos/', $attributes);
    $response->assertStatus(302);
    $this->assertDatabaseHas('requisitos', $attributes);
    $this->assertCount(1, Requisito::all());
});

it('logged user can update Requisito', function () {
    $this->withoutExceptionHandling();
    $attributes = Requisito::factory()->create(['by' => $this->user->id]);
    $attributesUpdate = ['nombre' => strtoupper('Nuevo nombre'), 'activo' => true];
    $this->assertCount(1, Requisito::all());
    $response = $this->actingAs($this->user)->put("/admin/requisito/{$attributes->uuid}/update", $attributesUpdate);
    $this->assertCount(1, Requisito::all());
    // $this->assertDatabaseHas('categoria_requisitos', $attributesUpdate);
    $response->assertStatus(302);
});
