<?php

use App\Models\User;

beforeEach(function () {
    $this->hey = 'artisan';
});
it('logged_user_can_view_medios', function () {
    $response = $this->actingAs($user = User::factory()->create())->get('/admin/medios');
    // $response = $this->actingAs($user);
    // $response = $this->get('/admin/medios');
    $response->assertStatus(200);
    $this->assertEquals('artisan', $this->hey);
});
