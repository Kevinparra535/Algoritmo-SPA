class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  loadRoute(...urlSegs) {
    const matchedRoute = this._matchUrlToRoute(urlSegs);

    // Inyectamos la nueva URL
    const url = `/${urlSegs.join("/")}`;
    history.pushState({}, 'This works', url);

    const routerOutElm = document.querySelectorAll('[data-router]')[0];

    routerOutElm.innerHTML = matchedRoute.template
  }

  // Esta funcion nos permite encontrar las rutas que buscamos
  // URLSegs es la ruta que vamos a cargar mediante los botones
  _matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find((route) => {
      // Con esto dividimos la ruta despues del elemento slash(/)
      // El metodo Slice nos dice desde donde queremos hacer el corte, en este caso desde el spacio 1

      const routePathSegs = route.path.split("/").slice(1);

      // Si no hay una respuesta del URL (urlSegs) que se pide me devuelve False
      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }

      // Si el match es efectivo

      return routePathSegs.every(
        (routePathSegs, i) => routePathSegs === urlSegs[i]
      );

      //.every() Este metodo verifica con una condicion todos los elementos de un array, si todos los elementod cumplen nos devuelve un boooleano que seria TRUE, si alguno no lo cumple devuelve FALSE

      // i es para iterar
    });
    return matchedRoute;
  }

  // Nos carga a la primera ruta = Home o /
  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    // Recuerda que los tres puntos hacen referencia Spread syntax que nos permite agarrar un itreable y utilizarlo como el argumento de la función que nosotros querramos ocupar
    // https://platzi.com/tutoriales/1339-fundamentos-javascript/2231-entendiendo-el-spread-operator-en-javascript/
    // Esto significa que estamos guardando nuestra ruta actual

    this.loadRoute(...pathSegs);
  }
}
