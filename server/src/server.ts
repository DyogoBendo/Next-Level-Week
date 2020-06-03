import express, { request, response } from 'express';
import routes from './routes'; // importando as rotas

// Ao usar TypeScript, as bibliotecas precisam vir com as definicoes de tipo

const app = express(); // Crio a aplicacao principal, usando express

app.use(express.json()); // express nao vem para trabalhar apenas com JSON, precisamos explicitar
app.use(routes); // Digo para meu app usar as rotas

app.listen(3333);