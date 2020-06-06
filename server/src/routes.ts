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



import express, { request, response } from 'express';

// importando os controllers
import PointsController from './controllers/PointsController'; 
import ItemsController from './controllers/ItemsController';

// importando o multer e a config dele
import multer from 'multer'
import multerConfig from './config/multer';

const routes = express.Router(); // possibilita que as rotas sejam acessadas fora do arquivo principal

// variavel para lidar com upload
const upload = multer(multerConfig);

//intanciando os controllers
const pointsController = new PointsController(); 
const itemsController = new ItemsController();

routes.get('/items', itemsController.index); // rota para pegar todos os itens
routes.get('/points/:id', pointsController.show); // Mostrando um ponto de coleta especifico
routes.get('/points', pointsController.index); // Mostrando potnos de coleta com filtros

routes.post('/points',upload.single('image'), pointsController.create); // criando um ponto de coleta, passamos tambem variavel de upload como parametro, como single, por ser uma unica imagem

export default routes; // exportar rotas para que sejam acessadas pelo server
