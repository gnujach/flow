<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Testing\AssertableInertia as Assert;
use App\Models\User;
use App\Models\Tramite;
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
