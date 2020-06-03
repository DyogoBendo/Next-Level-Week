// Rota: Endereco completo da nossa requisicao
// Recurso: Qual entidade estamos acessando do sistema

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



import express from 'express';

const routes = express.Router(); // possibilita que as rotas sejam acessadas fora do arquivo principal

routes.get('/', (request, response)=>{
    return response.json({message: 'Hello World!'});
});

export default routes; // exportar rotas para que sejam acessadas pelo server