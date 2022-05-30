<?php

namespace App\Policies;

use App\Models\CategoriaRequisito;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoriaRequisitoPolicy
{
    use HandlesAuthorization;


    /**
     * Perform pre-authorization checks.
     *
     * @param  \App\Models\User  $user
     * @param  string  $ability
     * @return void|bool
     */
    public function before(User $user, $ability)
    {
        if ($user->hasRole('Administrator')) {
            return true;
        }
    }
    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->hasRole('Admin');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, CategoriaRequisito $categoriaRequisito)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->hasRole('Admin');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, CategoriaRequisito $categoriaRequisito)
    {
        return false;
    }

    public function updatebyUser(User $user)
    {
        return $user->hasRole('Admin');
    }
    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, CategoriaRequisito $categoriaRequisito)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, CategoriaRequisito $categoriaRequisito)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\CategoriaRequisito  $categoriaRequisito
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, CategoriaRequisito $categoriaRequisito)
    {
        //
    }
}
