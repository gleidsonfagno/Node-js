# Node-js

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Fundamento</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Event Loop</td>
      <td>Responsável por gerenciar operações assíncronas e não bloqueantes no Node.js.</td>
    </tr>
    <tr>
      <td>Módulo HTTP</td>
      <td>Permite criar servidores e lidar com requisições e respostas HTTP.</td>
    </tr>
    <tr>
      <td>Rotas</td>
      <td>Definem os caminhos que o servidor pode responder, como GET / ou POST /dados.</td>
    </tr>
    <tr>
      <td>Métodos HTTP</td>
      <td>GET, POST, PUT, DELETE — usados para CRUD e comunicação com APIs.</td>
    </tr>
    <tr>
      <td>Middleware</td>
      <td>Funções intermediárias que processam requisições antes de chegar à rota final.</td>
    </tr>
    <tr>
      <td>JSON e Dados</td>
      <td>Manipulação de dados em formato JSON no corpo das requisições/respostas.</td>
    </tr>
    <tr>
      <td>Requisição (req)</td>
      <td>Objeto que contém informações da requisição feita pelo cliente.</td>
    </tr>
    <tr>
      <td>Resposta (res)</td>
      <td>Objeto usado para enviar resposta ao cliente (res.send, res.json, etc).</td>
    </tr>
  </tbody>
</table>

## API
**A**pplication **P**rogramming **I**nterface (Interface de Progamaçõa de aplicação)

Rota

-  Uma rota é um ponto de extremidade qeu associa uma URL especificada a uma função que manipula requisiçoes HTTP.
- 1. https://meuservidor.com.br/products
- 2. ``protocolo``:// ``servidor``/ ``rota``

## Métodos HTTP

<table border="1">
  <thead>
    <tr>
      <th>Método</th>
      <th>Descrição</th>
      <th>Uso comum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Solicita dados do servidor</td>
      <td>Obter informações (ex: listar usuários)</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Envia dados para o servidor</td>
      <td>Criar um novo recurso (ex: cadastrar usuário)</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Substitui completamente um recurso</td>
      <td>Atualizar dados existentes</td>
    </tr>
    <tr>
      <td>PATCH</td>
      <td>Atualiza parcialmente um recurso</td>
      <td>Modificar parte dos dados</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Remove um recurso do servidor</td>
      <td>Excluir dados (ex: deletar usuário)</td>
    </tr>
  </tbody>
</table>

## Http response status codes

<table border="1">
  <thead>
    <tr>
      <th>Código</th>
      <th>Categoria</th>
      <th>Significado</th>
      <th>Uso comum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200</td>
      <td>Sucesso</td>
      <td>OK</td>
      <td>Requisição bem-sucedida</td>
    </tr>
    <tr>
      <td>201</td>
      <td>Sucesso</td>
      <td>Created</td>
      <td>Recurso criado com sucesso</td>
    </tr>
    <tr>
      <td>204</td>
      <td>Sucesso</td>
      <td>No Content</td>
      <td>Sem conteúdo para retornar</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Erro do cliente</td>
      <td>Bad Request</td>
      <td>Requisição malformada</td>
    </tr>
    <tr>
      <td>401</td>
      <td>Erro do cliente</td>
      <td>Unauthorized</td>
      <td>Não autorizado (sem token, por exemplo)</td>
    </tr>
    <tr>
      <td>403</td>
      <td>Erro do cliente</td>
      <td>Forbidden</td>
      <td>Proibido (sem permissão)</td>
    </tr>
    <tr>
      <td>404</td>
      <td>Erro do cliente</td>
      <td>Not Found</td>
      <td>Recurso não encontrado</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro do servidor</td>
      <td>Internal Server Error</td>
      <td>Erro inesperado no servidor</td>
    </tr>
    <tr>
      <td>503</td>
      <td>Erro do servidor</td>
      <td>Service Unavailable</td>
      <td>Serviço temporariamente indisponível</td>
    </tr>
  </tbody>
</table>

## Como o Node.js lida com Requisiçoes HTTP

Enviar dados

## Middleware

- Fazer log de requisições

- Validar autenticação/autorização

- Analisar corpo da requisição (body-parser)

- Manipular cabeçalhos

- Tratar erros

## Route Params
**http://localhost:3333/products/7**
## Parametros nomeados
**http://localhost:3333/products/?category=computer&price=500**