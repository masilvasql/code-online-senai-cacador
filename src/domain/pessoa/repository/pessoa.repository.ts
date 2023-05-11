import { prisma } from "../../../database/database";
import {v4 as uuuIdv4} from 'uuid'
import { PessoaInputDTO, PessoaOutputDTO } from "../dto/pessoa.dto";
export default class PessoaRepository{

    async inserePessoa(input:PessoaInputDTO): Promise<PessoaOutputDTO>{
        
        const idPessoa = uuuIdv4()
        await prisma.pessoa.create({
            data:{
                name: input.name,
                idade: input.idade,
                id: idPessoa,
                depente:{
                    createMany:{
                        data: input.dependentes === undefined ? [] : input.dependentes.map((dependente:any)=>{
                            return{
                                id: uuuIdv4(),
                                name: dependente.name,
                                idade: dependente.idade,
                            }
                        })
                    }
                }

            }
        })

        const ouput = await this.findPessoaById(idPessoa)

        return ouput;
    }


    async findPessoaById(id:string): Promise<PessoaOutputDTO>{
        //SELECT * FROM PESSOA WHERE ID = ?
        const pessoa = await prisma.pessoa.findUnique({
            where:{
                id: id
            },
            include:{
                depente: true
            }
        })

        if(pessoa === null){
            throw new Error("Pessoa não encontrada")
        }

        const pessoaOutputDTO:PessoaOutputDTO = {
            id: pessoa.id,
            name: pessoa.name,
            idade: pessoa.idade ?? 0,
            dependentes: pessoa?.depente === undefined ? [] : pessoa.depente.map((dependente:any)=>{
                return{
                    id: dependente.id,
                    name: dependente.name,
                    idade: dependente.idade
                }
            } )
        }

        return pessoaOutputDTO;
    }

}