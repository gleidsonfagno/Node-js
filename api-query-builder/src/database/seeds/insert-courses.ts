import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex("courses").insert([
    { name: "CSS" },
    { name: "Node js" },
    { name: "SQL" },
    { name: "Mongo DB" },
    { name: "Python" },
    { name: "Expres" },
    { name: "TypeScript" },
    { name: "Postgresql" },
  ]);
}
