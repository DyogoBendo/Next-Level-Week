import Knex from 'knex'; // Com K maiusculo, pois queremos nos referiar ao tipo, que no caso eh um tipo complexo, o Knex

export async function up(knex: Knex){ // realizar as alteracoes que precisamos dentro do banco
    // Criar a tabela
    return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary(); // campo id, chave primaria, auto-incremento

        table.integer('point_id')
        .references('id')
        .inTable('points');
        // campo point_id, tipo inteiro, chave estrangeira

        table.integer('item_id')
        .references('id')
        .inTable('items');
        // campo item_id, tipo inteiro, chave estrangeira
    }); // Intancia do Knex que tem acesso ao nosso BD, que cria uma tabela
}
export async function down(knex: Knex){ // Serve para voltar atras, caso erramos alguma coisa. Faz o contrario do metodo up
    // Deletar tabela
    return knex.schema.dropTable('point_items');
}