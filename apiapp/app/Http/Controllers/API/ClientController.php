<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ClientModel;
use Illuminate\Http\Request;
use App\Http\Resources\CLIENTResource;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = ClientModel::all();
        
        return response(['success'=>true, 'client' => CLIENTResource::collection($client), 'message' => 'Retrieved successfully'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'business_name' => 'required|max:255'
            // 'user' => 'required|max:255',
            // 'password' => 'required|max:10',
            // 'email' => 'required'
        ]);

        if($validator->fails()){
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $client = ClientModel::create($data);

        return response([ 'client' => new CLIENTResource($client), 'message' => 'Created successfully'], 200);
   
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClientModel  $clientModel
     * @return \Illuminate\Http\Response
     */
    public function show(ClientModel $clientModel)
    {
        return response([ 'client' => new CLIENTResource($client), 'message' => 'Retrieved successfully'], 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClientModel  $clientModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientModel $clientModel)
    {
        $client->update($request->all());

        return response([ 'client' => new CLIENTResource($client), 'message' => 'Retrieved successfully'], 200);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClientModel  $clientModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientModel $clientModel)
    {
        $clientModel->delete();

        return response(['message' => 'Deleted']);
   
    }
}
