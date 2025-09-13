@extends('errors::minimal')

@section('code', '404')
@section('title', __('Página no encontrada'))

@section('image')

    <div id="apartado-derecho" style="background-color: #F5716C;"
        class="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
        <div style="background-image: url('/assets/img/404.png');"
            class="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
        </div>
    @endsection

    @section('message', __('No hemos encontrado la página que buscas.'))
