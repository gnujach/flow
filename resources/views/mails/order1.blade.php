@component('mail::messagerevisar')
    Estimado (a): {{ $maildata['nombre_cliente'] }}
    Hemos detectado que hace poco visitó USAE San Luis de la Paz, agradecemos mucho nos ayude a responder una encuesta de
    satisfacción de servicio, haciendo clic en el siguiente botón.
    @component('mail::button', [
        'url' => $maildata['url'],
        'color' => 'success',
    ])
        Llenar encuesta
    @endcomponent
@endcomponent
