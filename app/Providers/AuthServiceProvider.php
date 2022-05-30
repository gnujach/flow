<?php

namespace App\Providers;

use App\Models\Team;
use App\Models\CategoriaRequisito;
use App\Models\User;
use App\Policies\CategoriaRequisitoPolicy;
use App\Policies\TeamPolicy;
use App\Policies\USerPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Team::class => TeamPolicy::class,
        CategoriaRequisito::class => CategoriaRequisitoPolicy::class,
        User::class => USerPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {


        $this->registerPolicies();


        //
    }
}
