<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request){

        $userId = $request->user()->id;

        $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [
            'id_usuario' => $userId
        ]);

        $trilhas = $response->successful() ? $response->json() : [];

        return Inertia::render('Dashboard', [
            'trilhas' => $trilhas
        ]);
    }
}
