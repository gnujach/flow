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
use Illuminate\Support\Facades\Log;
use Throwable;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $details;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $maildata = [
            'title' => 'Sistema de seguimiento a trámites USAE San Luis de la Paz Flow',
            'url' => 'https://flow.open-link.net',
            'body' => 'Go!!',
            'nombre_cliente' => $this->details['nombre_cliente'],
            'url' => $this->details['url'],
            'folio' => $this->details['folio'],
            'concluido' => $this->details['concluido'],
            'correo' => $this->details['correo'],
        ];
        // Log::emergency($maildata);
        // dd($maildata);

        Mail::to($this->details['email'])->send(new OrdenEmail($maildata));
    }

    public function failed(Throwable $exception): void
    {
        Log::emergency($exception);
    }
}
