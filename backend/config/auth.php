<?php

return [


    'defaults' => [
        'guard' => 'api',
        'passwords' => 'users',
    ],


    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'api' => [
                'driver' => 'jwt',
                'provider' => 'users',
        ],

    ],



    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],


    ],

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
            'broker' => 'jwt',
        ],
    ],


    'password_timeout' => 10800,

];
