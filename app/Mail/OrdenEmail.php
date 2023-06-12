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
        $address = 'openlinkmx@gmail.com';
        $subject = 'Trabajamos para su servicio!';
        $name = 'This is perfect';

        return $this->markdown('mails.order')
            ->from($address, $name)
            ->subject($subject)
            ->with('maildata', $this->maildata);
    }
}
