import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  await knex("courses").insert({ name });
  // await knex.raw("INSERT INTO courses (name) VALUES (?) ", [name]);
  return response.status(201).json();
});

app.get("/courses", async (req: Request, res: Response) => {
  // const courses = await knex.raw("SELECT * FROM courses")
  const courses = await knex("courses").select().orderBy("name", "asc");
  return res.json(courses);
});

app.put("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const { name } = req.body;

  await knex("courses").update({ name }).where({ id: id }); // condição (WHERE id = 1)  // campos que quero alterar
  return res.json();
});

app.delete("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await knex("courses").delete().where({ id });
  return res.json();
});

// Modules
app.post("/courses/modules", async (req: Request, res: Response) => {
  const { name, course_id } = req.body;
  await knex("course_modules").insert({ name, course_id });
  return res.status(201).json();
});
app.get("/courses/modules", async (req: Request, res: Response) => {
  const modules = await knex("course_modules").select();

  return res.json(modules);
});

app.get("/courses/:id/modules", async (req: Request, res: Response) => {
  const courses = await knex("courses")
    .select(
      "courses.id AS course_id",
      "course_modules.id AS module_id",
      "course_modules.name AS module",
      "courses.name AS course"
    )
    .join("course_modules", "courses.id", "course_modules.course_id");

  return res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
