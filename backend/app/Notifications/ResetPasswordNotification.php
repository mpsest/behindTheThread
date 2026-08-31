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
        $frontendUrl = rtrim(config('app.frontend_url', config('app.url')), '/');
        $url = $frontendUrl . '/reset-password?token=' . $this->token . '&email=' . urlencode($this->email);

        return (new MailMessage)
            ->subject('Recuperação de Password')
            ->greeting('Olá, ' . $notifiable->name . '!')
            ->line('Recebemos um pedido para repor a password da sua conta.')
            ->action('Repor Password', $url)
            ->line('Este link expira dentro de 60 minutos.')
            ->line('Se não pediu a recuperação de password, pode ignorar este e-mail.');
    }
}
