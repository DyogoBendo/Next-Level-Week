import Knex from 'knex'; // Com K maiusculo, pois queremos nos referiar ao tipo, que no caso eh um tipo complexo, o Knex

export async function up(knex: Knex){ // realizar as alteracoes que precisamos dentro do banco
    // Criar a tabela
    return knex.schema.createTable('items', table =>{
        table.increments('id').primary(); // campo id, chave primaria, auto-incremento
        table.string('image').notNullable; // campo image, tipo string, nao pode ser nulo
        table.string('title').notNullable; // campo title, tipo string, nao pode ser nulo
    }); // Intancia do Knex que tem acesso ao nosso BD, que cria uma tabela
}
export async function down(knex: Knex){ // Serve para voltar atras, caso erramos alguma coisa. Faz o contrario do metodo up
    // Deletar tabela
    return knex.schema.dropTable('items');
}