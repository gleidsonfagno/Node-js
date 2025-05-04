import http from "node:http"

const server = http.createServer((req, res) => {
    const {method} = req
    return res.writeHead(200).end("Metodo: " + method)
})

server.listen(3333)
