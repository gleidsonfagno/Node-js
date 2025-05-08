import { routes } from "../routes.js";

export function routeHander(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path.test(req.url)
  });

  if (route) {
    const routeParams = req.url.match(route.path)
    const {...params} = routeParams.groups

    req.params = params
    // console.log(routeParams.groups)
    return route.controller(req, res);
  }
  return res.writeHead(404).end("Rota não encontrada");
}
