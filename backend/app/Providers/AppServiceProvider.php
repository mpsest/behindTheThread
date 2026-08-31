<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Mailer\Bridge\Mailtrap\Transport\MailtrapTransportFactory;
use Symfony\Component\Mailer\Transport\Dsn;

class AppServiceProvider extends ServiceProvider
{

public function boot(): void
{
    Mail::extend('mailtrap', function () {
        $factory = new MailtrapTransportFactory();

        $dsn = Dsn::fromString(sprintf(
            'mailtrap+sandbox://%s@default?inboxId=%s',
            config('services.mailtrap.token'),
            config('services.mailtrap.inbox_id')
        ));

        return $factory->create($dsn);
    });
}
}
