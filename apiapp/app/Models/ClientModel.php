<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientModel extends Model
{
    use HasFactory;
    protected $fillable = [
            'client_id',
           'business_name',
           'rfc',
           'direccion',
           'cp',
           'email'
    ];
}
