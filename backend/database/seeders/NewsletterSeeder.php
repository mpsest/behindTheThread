<?php

namespace Database\Seeders;

use App\Models\Newsletter;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NewsletterSeeder extends Seeder
{
    public function run(): void
    {
        $emails = [
            'ana.demo@example.test',
            'bruno.demo@example.test',
            'carla.demo@example.test',
            'diogo.demo@example.test',
        ];

        foreach ($emails as $email) {
            Newsletter::firstOrCreate(
                ['email' => $email],
                ['token' => Str::random(64)],
            );
        }
    }
}
