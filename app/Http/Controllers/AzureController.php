<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use Illuminate\Support\Facades\Auth;

class AzureController extends Controller
{
    public function redirectAzure()
    {
        return Socialite::driver('azure')->redirect();
    }

    public function callbackAzure()
    {
        try {
            $azureUser = Socialite::driver('azure')->user();
            $findUser = User::where('azure_id', $azureUser->id)->first();
            if ($findUser) {
                Auth::login($findUser);
                return redirect()->intended('dashboard');
            } else {
                $newUser = User::create([
                    'name' => $azureUser->name,
                    'email' => $azureUser->email,
                    'azure_id' => $azureUser->id,
                    'password' => encrypt('12345678')
                ]);
                Auth::login($newUser);
                return redirect()->intended('dashboard');
            }
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
