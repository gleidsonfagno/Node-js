import http from "node:http"
import { jsonBodyHanndler } from "./middlewares/jsonBodyHanndler.js"
import { routeHander } from "./middlewares/routeHandller.js"

const server = http.createServer(async (req, res) => {
    await jsonBodyHanndler(req, res)
    routeHander(req, res)
})

server.listen(3333)
