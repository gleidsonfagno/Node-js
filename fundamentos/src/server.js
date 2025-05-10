import http from "node:http"
import { jsonBodyHanndler } from "./middlewares/jsonBodyHanndler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

const server = http.createServer(async (req, res) => {
    await jsonBodyHanndler(req, res)
    routeHandler(req, res)
})

server.listen(3333)
