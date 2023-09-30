<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class OrdenEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $maildata;
    public function __construct($maildata)
    {
        $this->maildata = $maildata;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $address = 'segusaeslp@gmail.com';
        $subject = $this->maildata['nombre_cliente'];
        $subjectData = $this->maildata['nombre_cliente'] . '#' . $this->maildata['concluido'];
        $name = 'USAE San Luis de la Paz';
        $correo = $this->maildata['correo'];

        return $this->markdown('mails.order')
            // ->from($address, $name)
            ->from($address)
            ->subject($subject)
            ->with('maildata', $this->maildata);

        // return $this->text('mails.order')
        //     ->from($address)
        //     ->subject($subjectData)
        //     ->with('maildata', $this->maildata);
    }
}
