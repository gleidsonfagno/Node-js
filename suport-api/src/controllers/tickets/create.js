import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
  const { equipment, description, user_name } = request.body;

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    create_at: new Date(),
    updated_at: new Date(),
  };

  // passando o nome da tabelela e os dados que esta na const tickets
  database.insert("tickets", ticket);

  return response.writeHead(201).end(JSON.stringify(ticket));
}
