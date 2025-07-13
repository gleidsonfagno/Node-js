import http from "node:http";

import { JsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  await JsonHandler(request, response);
  // console.log(request.body)
  routeHandler(request, response);
}

http.createServer(listener).listen(3333);
