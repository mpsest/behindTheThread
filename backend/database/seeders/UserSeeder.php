<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@behindthethread.test'],
            [
                'name' => 'Admin Demo',
                'password' => Hash::make('password123'),
                'user_type' => User::TYPE_ADMIN,
            ],
        );

        User::updateOrCreate(
            ['email' => 'user@behindthethread.test'],
            [
                'name' => 'Utilizador Demo',
                'password' => Hash::make('password123'),
                'user_type' => User::TYPE_USER,
            ],
        );
    }
}
