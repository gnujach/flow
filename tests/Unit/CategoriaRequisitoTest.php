<?php

use App\Models\User;
use App\Models\CategoriaRequisito;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


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

it('logged_user_can_view_categoriarequisito', function () {
    $this->withoutExceptionHandling();
    $response = $this->actingAs($this->user)->get('/admin/categorias_requisito');
    $response->assertStatus(200);
});

it('logged user can add model', function () {
    $this->withoutExceptionHandling();
    $attributes = CategoriaRequisito::factory()->raw(['by' => $this->user->id]);
    $response = $this->actingAs($this->user)->post('/admin/categorias_requisito/', $attributes);
    $response->assertStatus(201);
    $this->assertDatabaseHas('categoria_requisitos', $attributes);
    $this->assertCount(1, CategoriaRequisito::all());
});

it('logged user can update Categoria de Requisito', function () {
    $this->withoutExceptionHandling();
    $attributes = CategoriaRequisito::factory()->create(['by' => $this->user->id]);
    $attributesUpdate = ['nombre' => strtoupper('noddeo')];
    $this->assertCount(1, CategoriaRequisito::all());
    $response = $this->actingAs($this->user)->put("/admin/categorias_requisito/{$attributes->uuid}/update", $attributesUpdate);
    $this->assertCount(1, CategoriaRequisito::all());
    // $this->assertDatabaseHas('categoria_requisitos', $attributesUpdate);
    $response->assertStatus(201)->assertJson(['message' => 'Todo has been updated']);
});


it('logged user can delete a model', function () {
    $user = User::factory()->create();
    $attributes = CategoriaRequisito::factory()->create(['by' => $user->id]);
    $this->assertCount(1, CategoriaRequisito::all());
    $response = $this->actingAs($user)->delete("/admin/categorias_requisito/{$attributes->uuid}/delete");
    $response->assertStatus(201)->assertJson(['message' => 'Model had deleted']);
    $this->assertCount(0, CategoriaRequisito::all());
});
