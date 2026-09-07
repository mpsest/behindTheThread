<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordNotification extends Notification
{
    use Queueable;

    public function __construct(
        public string $token,
        public string $email
    ) {
    }

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $frontendUrl = rtrim(
            config('app.frontend_url', config('app.url')),
            '/'
        );

        $url = $frontendUrl
            . '/recuperar-password?token='
            . $this->token
            . '&email='
            . urlencode($this->email);

        return (new MailMessage)
            ->subject('Recuperação de Password | Behind the Thread')
            ->view('emails.reset-password', [
                'user' => $notifiable,
                'url' => $url,
            ]);
    }
}