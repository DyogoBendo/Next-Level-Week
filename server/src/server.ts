import express, { request, response } from 'express';

// Ao usar TypeScript, as bibliotecas precisam vir com as definicoes de tipo

// Rota: Endereco completo da nossa requisicao
// Recurso: Qual entidade estamos acessando do sistema

const app = express();

app.use(express.json()); // express nao vem para trabalhar apenas com JSON, precisamos explicitar

/* Metodos HTTP
    GET: Sempre que o navegador acessa um rota ele utiliza a requisicao do tipo get, pois eh o unico tipo que ele sabe fazer. -> Buscar uma ou mais informacoes do backend
    POST: Criar uma nova informacao no backend
    PUT: Atualizar uma informacao existente no backend
    DELETE: Deletar uma informacao existente no backend

*/

/**         Tipos de parametro
 * Request Params: Parametros que vem na propria rota que identificam um recurso (buscar, atualizar, deletar um unico usuario). Um parametro essencial para a rota
 * Query Param: Parametros opcionais, usado para filtros e paginacao -> identificados por ? e que vem na propria rota
 * Request Body: Parametros para criacao e atualizacao de informacoes -> senha, email, nome, etc
 */

const users = [
    'Diego',
    'Cleiton',
    "Robson",
    "Adalberto"
];

app.get('/users', (request, response)=>{
    // Request -> o que é requisitado pela aplicação
    //Response -> o que é retornado pela aplicação, geralmente feito em JSON

    const search = String(request.query.Name); // O ultimo eh o nome da query, parametro de query

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users; // => necessario para filtrar

    // response.send('<head> <style> body {background: #232323; color: white}</style> </head> <h1> Hello world <h1>');
    // JSON
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) =>{ // :/ usado para parametros -> servem como filtros 
    const id = Number(request.params.id); // -> pegamos o parametro da requisicao, ele vem por padrao como String, e convertemos para Number

    const user = users[id];

    return response.json(user);

}); 

app.post('/users', (request, response)=>{ // Mesmo que seja a mesma rota, sao metodos diferentes
    const data = request.body; // Requisicao de body

    console.log(data);

    const user ={
        name: 'Dyogo',
        email: 'dyogoromagnabendo@gmail.com'
    }

    return response.json(user);
});

app.listen(3333);