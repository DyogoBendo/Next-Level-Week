import { Request, Response } from "express"; // Precisamos dizer qual o formato de request e response
import knex from "../database/connection";

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body; // pegando os valores que serao passados pelo body para a insercao de um novo cadastro. Podemos usar a desestruturcao, se sabemos que vira mais de um campo

    const trx = await knex.transaction(); // faz com que duas ações no banco de dados tenham relação

    const point = {
      // variavel com todos os valores que serao inseridos
      image: "image-fake",
      name, // quando o nome da variavel eh igual o nome do objeto que esta recebendo, podemos omitir
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx("points").insert(point); // assim que é terminada a inserção, ele retorna a id do que foi criado

    const point_id = insertedIds[0]; // como só temos inserimos um registro por vez, pegamos a primeira posição do array sempre

    // relacionamento com a tabela de itens

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx("point_items").insert(pointItems); // inserimos os calores de item_id e point_id em point_items

    await trx.commit(); // Faz os insertes na base de dados

    return response.json({
      id: point_id,
      ...point, // spread operator, que pega todos os dados de um objeto e retorna para outro objeto
    }); // Mostramos como resultado todos os valores inseridos
  }
  async show(request: Request, response: Response) {
    const { id } = request.params; // Como o nome do parametro e da variavel sao o mesmo, podemos usar a desestruturacao

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "Point not found" });
    }

    /**
     * SELECT * FROM items
     * JOIN point_items on items_id = point_items.item_id
     * WHERE point_items.point_id = id
     */

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return response.json({ point, items });
  }
  async index(request: Request, response: Response) {
    //Filtros de cidade, uf e itens -> Query params
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim())); // Os valores das ids dos itens vem como string, separado por `,`, a ideia eh separar. Caso haja espaco entre cada virgula, o trim tira

    const points = await knex ('points')
    .join('point_items', 'points.id', '=', 'point_items.point_id')  
    .whereIn('point_items.item_id', parsedItems) // Procura todos os pontos, que possuem um item que esta dentro do filtro parsedItems
    .where('city', String(city)) // que a cidade e a mesma -> sempre bom destacar o tipo, como String, Number, etc, ja que pode vir qualquer coisa pela query
    .where('uf', String(uf)) // que a uf eh a mesma
    .distinct() // Garante que nao vai retornar o mesmo ponto de coleta duas vezes
    .select('points.*'); // mostra apenas os pontos de coleta

    return response.json(points);
  }
}
export default PointsController;
