<?php

namespace App\Policies;

use App\Models\Cct;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CctPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasRole('Admin') || $user->hasRole('Editor') || $user->hasRole('Supervisor') || $user->hasRole('capturista');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Cct $cct): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Cct $cct): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Cct $cct): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Cct $cct): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Cct $cct): bool
    {
        //
    }
}
