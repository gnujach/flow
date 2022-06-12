<?php

namespace App\Policies;

use App\Models\Puesto;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PuestoPolicy
{
    use HandlesAuthorization;

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
     * @param  \App\Models\Puesto  $puesto
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Puesto $puesto)
    {
        //
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
     * @param  \App\Models\Puesto  $puesto
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Puesto $puesto)
    {
        //
    }

    public function updatebyUser(User $user)
    {
        return $user->hasRole('Admin');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Puesto  $puesto
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Puesto $puesto)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Puesto  $puesto
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Puesto $puesto)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Puesto  $puesto
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Puesto $puesto)
    {
        //
    }
}
