<?php

namespace App\Policies;

use App\Models\Tramite;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TramitePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->hasRole('Admin');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Tramite $tramite)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->hasRole('Admin');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Tramite $tramite)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Tramite $tramite)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Tramite $tramite)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\Tramite $tramite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Tramite $tramite)
    {
        //
    }
}
