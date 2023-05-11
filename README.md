### Instalar o Node 
https://nodejs.org/en

### Instalar o Docker no Windows
https://www.docker.com/products/docker-desktop/

### Instalar o Postgress via docker
* No Terminal, digitar o comando ```docker-compose up -d```

### Instalar dependências do projeto:
* npm install 

### acessar o postgress com o SGBD de sua preferência e criar o banco codeonline
* Sugestão **pgadmin**: pgadmin.org/download/

* código pra criar a tabela no banco ```create database codeonline``` 

### Comandos do Prisma
    - npx prisma generate
    - npx prisma migrate dev --name Criacao de Tabelas 

### Subindo o servidor:
* comando: ```npm run dev```


### ROTAS:
* criar pessoa: http://localhost:3000/pessoa
* Exemplo de JSON para criação do registro: 
```{
	"name":"João da Silva",
	"idade":31,
	"dependentes":[
		{
			"name":"Joana",
			"idade":1
		},
		{
			"name":"Maria",
			"idade":2
		}
	]
}
```

* buscar pessoa por ID: http://localhost:3000/pessoa/***8b118087-6325-4fd8-b600-2b112ddafb9d***
    - Substituir o ID pelo seu ID gerado no banco