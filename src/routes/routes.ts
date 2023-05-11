import router from 'express';
import InserePessoaHandler from '../domain/handle/insere-pessoa.handler';
import BuscaPessoaByIdHanlder from '../domain/handle/busca-pessoa.by-id.handler';

const route = router();
const inserePessoaHandler= new InserePessoaHandler()
const findPessoaById = new BuscaPessoaByIdHanlder()

route.get("/hello-world", (request, response)=>{
    return response.status(200).json({message: "Hello World!"})
})


route.post("/pessoa", inserePessoaHandler.handle)
route.get("/pessoa/:id", findPessoaById.handle)

export default route;