import knex from '../database/connection';
import {Request, Response} from 'express';

class ItemsController{
    async index (request: Request, response: Response){  
        const items = await knex('items').select('*'); //sempre que for feita uma query no banco de dados, usar await, pois assim ele aguarda a query terminar para prosseguir
    
        const serializedItems = items.map(item => { // O mapa intera sobre cada um dos itens, e podemos assim alterar o seu valor para entregar da forma que fique melhor para o frontend
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.103:3333/uploads/${item.image}`
            };
        }); 
        return response.json(serializedItems);
    }
}

export default ItemsController;