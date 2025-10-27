import type { Knex } from "knex";

// envia a alteração
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses", (table) => {
    table.increments("id").primary(),
      table.text("name").notNullable(),
      table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

// desfazer
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("courses")
}
