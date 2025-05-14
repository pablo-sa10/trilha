<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class NewLearningPathController extends Controller
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

        $responseTrilhas = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/Trilhas", [
            'id_usuario' => $userId
        ]);

        $responseMaterias = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/ListarMaterias");

        $trilhas = $responseTrilhas->successful() ? $responseTrilhas->json() : [];
        $responseMaterias = $responseMaterias->successful() ? $responseMaterias->json() : [];

        return Inertia::render("CreateLearningPath", [
            'trilhas' => $trilhas,
            'materias' => $responseMaterias,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'vestibular' => 'required|not_in:0', 
            'name' => 'required',
            'materia'=> 'required',
        ]);

        
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
