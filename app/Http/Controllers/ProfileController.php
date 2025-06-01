<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $userId = $request->user()->id;

        $responseTrilhas = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [
            'id_usuario' => $userId
        ]);
        $trilhas = $responseTrilhas->successful() ? $responseTrilhas->json() : [];

        return Inertia::render('Profile/Edit', [
            'trilhas' => $trilhas,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {

        $user = User::find(Auth::id());
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id),
            ],
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return redirect(route('dashboard', absolute: false)); // redireciona para a rota dashboard
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
