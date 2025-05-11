import { Database } from "../database.js";
import { routes } from "../routes.js"
import { extractQueryParams } from "../utils/estract-query-params.js";

const database = new Database()

export function routeHandler(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path.test(req.url)
  });

  if (route) {
    const routeParams = req.url.match(route.path)

    // recuperar os prametros
    const { query, ...params } = routeParams.groups 
    req.params = params;
    req.query = query ? extractQueryParams(query) : {};

    return route.controller({req, res, database});
  }
  return res.writeHead(404).end("Rota não encontrada");
}
