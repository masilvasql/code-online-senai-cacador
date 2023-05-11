export interface PessoaInputDTO{
    name: string,
    idade: number,
    dependentes?: Dependentes[]
}

export interface Dependentes{
    name: string,
    idade: number
}

export interface PessoaOutputDTO{
    id: string,
    name: string,
    idade: number,
    dependentes?:DependentesOutputDTO[]
}

export interface DependentesOutputDTO{
    id: string,
    name: string,
    idade: number
}