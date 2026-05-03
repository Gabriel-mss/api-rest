import {Request, Response} from "express"

class ProductsController {
   /**
    * index - GET para listar vários registros.
    * show - GET para exibir um registro específico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * remove - DELETE para deletar um registro.
    */

index(req: Request, res: Response){
    const { page, limit } = req.query

    res.send(`Página ${page} de ${limit}`)
}

create(req: Request, res: Response){
    const { name, price } = req.body
    
    res.status(201).json({ name, price, user_id: req.user_id })
}
}

export { ProductsController }