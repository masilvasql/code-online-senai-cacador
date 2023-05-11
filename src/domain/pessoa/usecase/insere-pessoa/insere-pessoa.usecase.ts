import UseCaseInterface from "../../../../@shared/usecase.interface";
import { PessoaInputDTO, PessoaOutputDTO } from "../../dto/pessoa.dto";
import PessoaRepository from "../../repository/pessoa.repository";



export default class InserePessoaUseCase implements UseCaseInterface{
    async execute(input: PessoaInputDTO): Promise<PessoaOutputDTO> {
        const pessoaRepository = new PessoaRepository()
        const ouput = await pessoaRepository.inserePessoa(input)
        return ouput
    }

}