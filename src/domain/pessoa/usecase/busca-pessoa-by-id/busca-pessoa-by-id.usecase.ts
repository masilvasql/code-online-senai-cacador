import UseCaseInterface from "../../../../@shared/usecase.interface";
import { PessoaOutputDTO } from "../../dto/pessoa.dto";
import PessoaRepository from "../../repository/pessoa.repository";
import { BuscaPessoaByIdDTO } from "./dto/busca-pessoa-by-id.dto";

export default class FindPessoaByIdUseCase implements UseCaseInterface{
   async  execute(input: BuscaPessoaByIdDTO): Promise<PessoaOutputDTO> {
        const repository = new PessoaRepository();
        const ouput = await repository.findPessoaById(input.id)
        return ouput
    }

}