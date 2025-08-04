// Objetivo juntar todos os arquivos

import { Router } from "express";
import { productsRoutes } from "./products-routes";

const route = Router()

route.use("/products", productsRoutes)

export {route}