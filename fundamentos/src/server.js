import http from "node:http"

const server = http.createServer(async (req, res) => {
    const {method, url} = req
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    console.log(Buffer.concat(buffers).toString())
    
    if(method === "GET" && url === "/products"){
        return res.end("Lista de produtos!")    
    }

    if (method === "POST" && url === "/products"){

        return res.writeHead(201).end("Produtos cadastrado!")
    }
    return res.writeHead(404).end("Rota nao encontrada")
})

server.listen(3333)
