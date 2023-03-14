<?php

namespace App\Jobs;

use App\Mail\OrdenEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $maildata = [
            'title' => 'Sistema de seguimiento a trámites USAE San Luis de la Paz',
            'url' => 'https://www.open-link.net',
            'body' => 'Estamos trabajando para concluir tu trámite'
        ];
        Mail::to('usaeslp@gmail.com')->send(new OrdenEmail($maildata));
    }
}
