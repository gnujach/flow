<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use \App\Models\User;

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
