<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'user' => 'required|unique:users',
            'password' => 'required'
        ]);

        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        // $accessToken = $user->createToken('authToken')->accessToken;

        return response([ 'user' => 'created successfully']);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'user' => 'required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)) {
            return response(['success'=>'false','message' => 'Invalid Credentials']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response(['success'=>true,'user' => auth()->user(), 'access_token' => $accessToken, "token_type"=> "Bearer"]);

    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
