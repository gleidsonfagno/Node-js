npm run  knex -- migrate:make create-courses
execulta todos
npm run knex -- migrate:latest
npm run  knex -- migrate:make add-updated-courses

listar 
npm run knex -- migrate:list

desfazer uma migação especifica

npm run knex -- migrate:down "ex 20250901200158_create-courses.ts"
o ultimo feito
npm run knex -- migrate:rollback
desfazer tudo
npm run knex -- migrate:rollback --all
npx knex migrate:rollback --all

O que é uma seed no Knex.js

Uma seed é basicamente um arquivo de script que serve para popular o banco de dados com dados iniciais ou de teste.

Ela é usada para:

Popular tabelas com dados iniciais

Por exemplo, você tem uma tabela courses. A seed insert-courses pode inserir alguns cursos padrão para você começar a trabalhar.

Testes e desenvolvimento

Em vez de ficar inserindo dados manualmente toda vez, você roda a seed e o banco é preenchido automaticamente.

Manter consistência entre ambientes

Se você tem desenvolvimento, staging e produção, as seeds podem garantir que tabelas importantes tenham dados essenciais em qualquer ambiente.
npx knex seed:make insert-courses

execulta
npx knex seed:run 


