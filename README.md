## Acerca del sistema de solicitudes aka Flow

El sistema de gestión de solicitudes permite registrar y gestionar todas las solicitudes de atención de los ciudadanos que se reciben el centro de atención, por las vías que defina el propio centro de atención, parte de la lógica de que todo solicitud de atención de un ciudadano está basada en un trámite, y que los servidores públicos tienen un catálogo de trámites definidos, este catálogo de trámites debe contener los requerimientos mínimos que recomienda la dirección de mejora regulatoria, los requisitos del trámite, así como las tarea secuenciales definidas para dar atención a dicho trámite.

Installation
1.Clona el repositorio: https://github.com/gnujach/flow.git
2.Instalar composer packages:
composer install .
3.Renombrar .env.example a .env 4. Generar llave del sistema app key: php artisan key:generate .
5 Ejecutar comandos:
php artisan migrate:refresh --seed .
npm install
npm run dev
