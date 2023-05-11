import { Request, Response } from "express";
import { PessoaInputDTO } from "../pessoa/dto/pessoa.dto";
import InserePessoaUseCase from "../pessoa/usecase/insere-pessoa/insere-pessoa.usecase";

export default class InserePessoaHandler{
    async handle(request:Request, response:Response){
        let body = request.body

        const pessoa: PessoaInputDTO = {
            name: body.name,
            idade:body.idade,
            dependentes:body.dependentes
        }

        const useCase = new InserePessoaUseCase();
        const ouput = await useCase.execute(pessoa)
        return response.status(201).json(ouput)
    }
}