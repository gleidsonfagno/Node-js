import express, { Request, Response, NextFunction } from "express";

import { route } from "./routes";
import { AppError } from "./utils/app-error";
import { ZodError } from "zod";

const PORT = 3333;

const app = express();

app.use(express.json()); //utilizar o json como estrateja pra representar dados

app.use(route); // importados as rotas

// tratar as exerções
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  //   messagem de ero usando o zad para validar
  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ messege: "Validation error", issues: error.format() });
  }

  response.status(500).json({ message: error.message });
});

app.listen(PORT, () =>
  console.log(`Server is Running on port  http://localhost:${PORT}`)
);
