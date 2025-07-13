# API REST um CRUD de Tockets

Essa api cria ticketis e de um e-comecer fictício. O usuario faz a requisiçaão préenchendo o campos como o nome do produto e a descrição do defeito e o nome dele e o ticket vai ser eviado co o ```"status": "open"```, se resovido ```"status": "closed"```. Essa aplicação na possui um banco de dados externo e salvo tudo no arquivo database.json.

## Os Métodos HTTP da requisção que são feitos para executar o CRUDE da aplicaçao

- GET http://localhost:3333/tickets * INDEX - listar
- POST http://localhost:3333/tickets  * CREATE - criar 
- PUT http://localhost:3333/tickets/b1b6347e-d4f8-4f08-9a50-4c081db500a1  * UPDATE - atualizar

Eses nomes que podem ser nomeados os arquivos para usar nos metodos.

 * CREATE - criar 
 * INDEX - listar
 * UPDATE - atualizar
 * REMOVE - remover
 * SHOW - para exibir único registro
