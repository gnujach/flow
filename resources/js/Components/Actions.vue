<template>
    <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div class="mb-4">
                <jet-application-logo class="block h-24 w-auto mx-auto"/>
            </div>
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-indigo-600">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor"
               class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="18302e52-9e2a-4c8e-9550-0cbb21b38e55" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
          </svg>
          <span class="relative">Flow</span>
        </span>
                Sistema de Gestión de Solicitudes de Atención
            </h2>
            <p class="text-base text-gray-700 md:text-lg text-indigo-500 font-bold">
                Delegación Regional Noreste
            </p>
        </div>
        <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <LightningBoltIcon class="w-10 h-10"/>
                    </div>
                    <h6 class="mb-2 font-semibold leading-5">Nueva Solicitud</h6>
                    <jet-nav-link :href="route('solicitudes', {})">
                        <p class="mb-3 text-sm text-gray-900">
                            Agregar nueva solicitud de atención al sistema
                        </p>
                    </jet-nav-link>
                </div>
            </div>
            <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <ChartBarIcon class="w-10 h-10"/>
                    </div>
                    <h6 class="mb-2 font-semibold leading-5">Ver Solicitudes</h6>
                    <jet-nav-link
                        :href="route('solicitudes.list') "
                    >
                        <p class="mb-3 text-sm text-gray-900">
                            Revisar Solicitudes de Atención
                        </p>
                    </jet-nav-link>
                </div>
            </div>
            <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <NewspaperIcon class="w-10 h-10"/>
                    </div>
                    <h6 class="mb-2 font-semibold leading-5">Administración de Trámites</h6>
                    <jet-nav-link
                        :href="route('admin.tramites') "
                    >
                        <p class="mb-3 text-sm text-gray-900">
                            Gestionar los trámites activos en el sistema
                        </p>
                    </jet-nav-link>
                </div>
            </div>
            <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <ClipboardIcon class="w-10 h-10"/>
                    </div>
                    <h6 class="mb-2 font-semibold leading-5">Catálogo de Requisitos</h6>
                    <jet-nav-link
                        :href="route('admin.requisitos/') "
                    >
                        <p class="mb-3 text-sm text-gray-900">
                            Gestionar los requisitos del sistema
                        </p>
                    </jet-nav-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import JetApplicationLogo from '@/Jetstream/ApplicationLogo'
import JetNavLink from "@/Jetstream/NavLink";
import {ChartBarIcon, LightningBoltIcon, ClipboardIcon, NewspaperIcon} from '@heroicons/vue/outline'
</script>
