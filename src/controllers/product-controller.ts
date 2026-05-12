import { Request, Response } from "express"
import { AppError } from "../utils/app-error"
import { z } from "zod"


class ProductsController {
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * remove - DELETE para deletar um registro.
     */

    index(req: Request, res: Response) {
        const { page, limit } = req.query

        res.send(`Página ${page} de ${limit}`)
    }

    create(req: Request, res: Response) {
        const bodySchema = z.object({
            name: z
                .string({ required_error: "Name is required!" })
                .trim()
                .min(6, { message: "Name must be 6 or more characters" }),
            price: z
                .number({ required_error: "Price is required!" })
                .positive({ message: "Price must be positive" })
        })

        const { name, price } = bodySchema.parse(req.body)

        /*
   
       if(!name){
           throw new AppError("Nome do produto é obrigatório.")
       }
   
       if(name.trim().length < 6) {
           throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres!")
       }
   
       if(!price){
           throw new AppError("Preço do produto é obrigatório.")
       }
   
       if(price < 0) {
           throw new AppError("O preço do produto não pode ser menor do que zero!")
       }
       */

        // throw new Error ("Erro ao tentar criar um produto!")
        // throw new AppError("Erro ao tentar criar um produto!")

        res.status(201).json({ name, price, user_id: req.user_id })
    }
}

export { ProductsController }