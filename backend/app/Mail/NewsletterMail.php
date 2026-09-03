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
     * @param string $unsubscribeUrl Link de anulação de subscrição, específico do destinatário
     */
    public function __construct(
        public string $mailSubject,
        public string $htmlContent,
        public string $unsubscribeUrl,
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
        // htmlString permite usar diretamente o HTML vindo do editor React, rodapé com o link de anulação de subscrição.
        $footer = view('emails.newsletter-footer', [
            'unsubscribeUrl' => $this->unsubscribeUrl,
        ])->render();

        return new Content(
            htmlString: $this->htmlContent . $footer,
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
