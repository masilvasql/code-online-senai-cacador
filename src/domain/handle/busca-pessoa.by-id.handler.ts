import { Request, Response } from "express";
import FindPessoaByIdUseCase from "../pessoa/usecase/busca-pessoa-by-id/busca-pessoa-by-id.usecase";

export default class BuscaPessoaByIdHanlder{
    async handle(request:Request, response: Response){
        const {id} = request.params
        const ueseCase = new FindPessoaByIdUseCase();
        const ouput = await ueseCase.execute({id})
        return response.status(200).json(ouput)
    }
}