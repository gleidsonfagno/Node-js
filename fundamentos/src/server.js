import http from "node:http"
import { jsonBodyHanndler } from "./middlewares/jsonBodyHanndler.js"

const server = http.createServer(async (req, res) => {
    const {method, url} = req

    await jsonBodyHanndler(req, res)

    if(method === "GET" && url === "/products"){
        return res.end("Lista de produtos!")    
    }

    if (method === "POST" && url === "/products"){
        console.log(req.body)
        return res.writeHead(201).end(JSON.stringify(req.body))
    }
    return res.writeHead(404).end("Rota nao encontrada")
})

server.listen(3333)
