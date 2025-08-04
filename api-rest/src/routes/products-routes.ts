import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductController } from "../controllers/products-controller"

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get("/",  productsController.index )

// middleware em rotas especificas
productsRoutes.post("/", myMiddleware,  productsController.create)

// tabem tem que exporta pra poder funcionar
export {productsRoutes}