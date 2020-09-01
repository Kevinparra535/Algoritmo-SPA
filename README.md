# Algoritmo-SPA
Aloritmo de como funciona una SPA


Documentacion: https://www.notion.so/Router-para-Single-Page-App-con-JavaScript-52347b0233de48e9ac25de3d226a7b49

## Que es una SPA

**SPA** Son aplicaciones construidas con JavaScript que nos permiten cargar nuestro
contenido una sola vez, es decir, se envían los archivos HTML, CSS y JS
una sola vez al navegador y ahí es donde va a vivir toda nuestra
aplicación, de tal forma que la aplicación no necesita ser recargada,
por ello, si se necesita navegar en la aplicación, **se navega entre
secciones y no páginas.**

### ***Ventajas***

- Son fáciles de debuggear.
- Son fáciles de crear.

### ***Desventajas***

- No es tan compatible con el SEO.
- No es recomendable aplicarlas para grandes aplicaciones (Aplicación
grande => más de 1000 usuarios y más de 50 secciones en la página).

## Algoritmo desglosado

- **Cargar ruta**: Identificar en donde nos encontramos (primera carga)

    ```jsx
    loadInitialRoute()
    ```

- **Comparar URL con ruta**: La URL la que nos queremos mover se debe comprar con las rutas que tenemos

    ```jsx
    matchUrlToRoute()
    ```

- **Actualizar la URL en la barra de navegación**: para esto utilizaremos el metodo del HTML push.state

    ```jsx
    window.history.pushState()
    loadRoute()
    ```

- Actualizar el DOM con nuevo contenido para esto utilizamos

    ```jsx
    inner.HTML
    loadRoute()
    ```

    ## Como Funciona

    Tendremos 4 archivos principales

    1. HTML:

        vamos a conectar todo para que tenga la capacidad de cargar nuevos sitios

    2. Index.js

        vamos a tener la instancia de nuestra clase router, cada botón que tengamos en nuestro archivo HTML va a instanciar nuestro archivo ROUTER, y lo utilizara como su fuente de consulta para saber que rutas tiene disponible

    3. Routes.js

        Es el array que contendrá todas nuestras rutas

    4. Router:

        Se encargara de que accedamos a todas las rutas e inserte los templetes en nuestro HTML
