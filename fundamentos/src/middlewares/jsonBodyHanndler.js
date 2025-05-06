export async function jsonBodyHanndler(req, res) {

  const buffers = []

  // coleta os chunks de dados da requisição
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    // concatenar e converter para string. EM seguida, converte a string parra JSON.
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }
  // define o header de resposta como JSON
  res.setHeader("Content-Type", "application/json")
}
