// Um middleware é uma função que intercepta a requisição (req) e a resposta (res) antes que elas cheguem no controller ou depois dele.
import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  request.user_id = "12345678";
  console.log("Passou no middleware");
  return next();
}
