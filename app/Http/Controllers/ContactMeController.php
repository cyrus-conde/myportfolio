<?php

namespace App\Http\Controllers;

use App\Mail\ContactMeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class ContactMeController extends Controller
{
    //
    public function index()
    {
        return view('index');
    }
    public function sendMail(Request $request){
        try{
            $mailData = [
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message
            ];
            Mail::to(env('MAIL_USERNAME'))->send(new ContactMeMail($mailData));
            
            return response()->json([
                'status' => 200,
                'message' => 'success',
            ]);
        }catch(Throwable $th){
            return response()->json([
                'status' => 500,
                'message' => 'error',
            ]);
        }
    }
}
