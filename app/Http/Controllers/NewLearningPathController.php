<?php

namespace App\Http\Controllers;

use App\Models\ProgressLearning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Types\Relations\Car;
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
            'materia' => 'required',
        ]);

        // dd($request->all());

        try {

            $url = "https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/CriarTrilha";

            $query = http_build_query([
                "id_usuario" => $request->user()->id,
                "nome_trilha" => $request->name,
                "materias" => $request->materia,
            ]);

            $response = Http::post("$url?$query");

            if ($response->failed()) {
                return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
            }

            return redirect(route('dashboard', absolute: false));
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        //
        try {
            $idUser = $request->user()->id;

            $response = Http::get("https://0yvgan5za6.execute-api.us-east-2.amazonaws.com/ListarQuestoesTrilha", [
                'id_usuario' => $idUser,
                'id_trilha' => $id
            ]);

            $trilha = $response->successful() ? $response->json() : null;
            $progress = $this->getProgress($idUser, $id);

            // return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
            return Inertia::render("LearningPath", [
                'trilha' => $trilha,
                'progress' => $progress
            ]);

        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['erro' => "Um erro inesperado aconteceu. Tente novamente mais tarde."]);
        }
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

    private function getProgress($idUser, $idTrilha)
    {

        $progress = ProgressLearning::where([
            ['user_id', '=', $idUser],
            ['learning_path_id', '=', $idTrilha]
        ])->first();

        return [
            'id_trilha' => $idTrilha,
            'finished_questions' => $progress->finished_questions,
            'total_questions' => $progress->total_questions
        ];
    }
}
