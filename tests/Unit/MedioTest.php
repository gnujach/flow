<?php

test('example', function () {
    $response = $this->actingAs($user = User::factory()->create())->get('/admin/categorias_requisito');

    // $response = $this->actingAs($user);
    // $response = $this->get('/admin/medios');
    $response->assertStatus(200);
});
