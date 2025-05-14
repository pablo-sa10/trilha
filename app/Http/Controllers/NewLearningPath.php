<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class NewLearningPath extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $userId = $request->user()->id;
        $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [
            'id_usuario' => $userId
        ]);

        $trilhas = $response->successful() ? $response->json() : [];

        return Inertia::render("CreateLearningPath", [
            'trilhas' => $trilhas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [
            'id_trilha' => $id
        ]);
        $trilha = $response->successful() ? $response->json() : [];
        return Inertia::render("LearningPath", [
            'trilha' => $trilha
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
