<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use \App\Models\User;
use \App\Models\Centro;
use \App\Models\Departamento;
use \App\Models\Puesto;

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


/**
 * Listar todos los usuarios del sistema
 */

it('user_with_rol_admin_can_view_user_list', function () {
    $this->withoutExceptionHandling();
    $request = $this->actingAs($this->user)->get('/admin/usuarios/')->assertInertia(
        fn (Assert $page) => $page
            ->component('Users/ListUsers')
            ->has('users')
    );
    $this->user = User::factory()->count(10)->create();
    $this->assertCount(11, User::all());
    $request->assertStatus(200);
});


/**
 * Edit user
 *
 */

it('user_with_rol_admin_can_edit_user', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($this->user)->get("/admin/usuarios/{$user->uuid}/edit")->assertInertia(
        fn (Assert $page) => $page
            ->component('Users/EditUser')
            ->has('user')
    );
    $response->assertStatus(200);
});


/**
 * Update user
 */

it('user_with_rol_admin_can_update_user', function () {
    // $this->withoutExceptionHandling();
    $attributes = User::factory()->create();
    $puesto = Puesto::factory()->create();
    $departamento = Departamento::factory()->create();
    $attributesUpdate = ['puesto_id' => $puesto->uuid,  'departamento_id' => $departamento->uuid];
    $response = $this->actingAs($this->user)->put("/admin/usuarios/{$attributes->uuid}/update", $attributesUpdate);
    $response->assertStatus(201);
});

/**
 * Listar todos los roles del sistema
 */

it('user_with_rol_admin_can_view_roles', function () {
    $this->withoutExceptionHandling();
    $request = $this->actingAs($this->user)->get('/admin/roles/show');
    $request->assertStatus(200);
});
