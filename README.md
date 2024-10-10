# WebServer con Node.js y Express

En este proyecto se ha creado un servidor web utilizando Node.js y Express, con un sistema de plantillas usando Handlebars (hbs). El sitio muestra la redirección a diferentes páginas, todas renderizadas del lado del servidor utilizando vistas con Handlebars y partials (parciales).

## Funcionalidades

- **Renderizado del lado del servidor**: Usamos Handlebars como motor de plantillas para renderizar vistas de manera dinámica.
- **Partials**: Se han creado archivos parciales (partials) para reutilizar componentes comunes en las diferentes vistas, como el header, footer, y menús de navegación.
- **Redirección a otras páginas**: El proyecto incluye varias rutas para manejar la redirección a diferentes páginas, todas renderizadas mediante Handlebars.
- **Uso de un template base**: Un template principal que se extiende en todas las vistas para mantener consistencia en la estructura del sitio.

## Tecnologías usadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework de Node.js para gestionar rutas y middleware.
- **Handlebars**: Motor de plantillas para el renderizado del lado del servidor.
- **hbs**: Paquete de integración de Handlebars para Express.
