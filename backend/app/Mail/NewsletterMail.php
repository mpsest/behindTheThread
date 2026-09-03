<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewsletterMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param string $mailSubject Assunto do email
     * @param string $htmlContent Conteudo da newsletter
     */
    public function __construct(
        public string $mailSubject,
        public string $htmlContent,
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->mailSubject,
        );
    }

    public function content(): Content
    {
        // htmlString permite usar diretamente o HTML vindo do editor React, sem precisar de uma view Blade.
        return new Content(
            htmlString: $this->htmlContent,
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
