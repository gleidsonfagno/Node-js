import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { z } from "zod";

class ProductController {
  /**
   * index - GET para listar város  registros.
   * show - GET para  exibir um registro  específico.
   * create - POST para criar u registro.
   * update - PUT para atualizar um registro.
   * remove - DELTE para deletar um regiostro.
   */
  index(request: Request, response: Response) {
    // /products?page=1&limit=10 Queryparmas prametros nomeados
    const { page, limit } = request.query; // Query parameters
    // const {id} = request.params
    response.send(`Página ${page} de ${limit} `); //envia a esposta para o  servidor
  }

  create(request: Request, response: Response) {
    // const { name, price } = request.body;

    const bosySchema = z.object({
      name: z
        .string({ required_error: "Name is required!" })
        .trim()
        .min(6, { message: "Name Must be 6 or more characters" }),
      price: z
        .number({ required_error: "Price is required!" })
        .positive({ message: "Price must be positive" }),
    });

    const { name, price } = bosySchema.parse(request.body);

    /*
    if(!name){
      throw new AppError("Nome do produto é obrigatótrio!")
    }

    if(name.trim().length < 6){
      throw new AppError("Nome do preduto precisa ter pelo menos 6 caracteres")
    }

    if(!price){
      throw new AppError("Preço do produto é obrigatótrio!")
    }

    if(price < 0){
      throw new AppError("Preço do produto não pode ser menor que zero!")
    }
    // response.send(`Produto  ${name} custa ${price}`)
    // throw new Error("ERRO DE EXEMPLO!");
    // throw new AppError("Erro ao  criar o produto!");
    */

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductController };
