import Knex from 'knex'; // Com K maiusculo, pois queremos nos referiar ao tipo, que no caso eh um tipo complexo, o Knex

export async function up(knex: Knex){ // realizar as alteracoes que precisamos dentro do banco
    // Criar a tabela
    return knex.schema.createTable('points', table =>{
        table.increments('id').primary(); // campo id, chave primaria, auto-incremento
        table.string('image').notNullable; // campo image, tipo string, nao pode ser nulo
        table.string('name').notNullable; // campo name, tipo string, nao pode ser nulo
        table.string('email').notNullable; // campo email, tipo string, nao pode ser nulo
        table.string('whatsapp').notNullable; // campo whatsapp, tipo string, nao pode ser nulo     
        table.string('city').notNullable; // campo city, tipo string, nao pode ser nulo
        table.string('uf', 2).notNullable; // campo uf, tipo string, com dois caracteres, nao pode ser nulo
        table.decimal('latitude').notNullable; // campo latitude, tipo decimal, nao pode ser nulo
        table.decimal('longitude').notNullable; // campo longitude, tipo decimal, nao pode ser nulo


    }); // Intancia do Knex que tem acesso ao nosso BD, que cria uma tabela
}
export async function down(knex: Knex){ // Serve para voltar atras, caso erramos alguma coisa. Faz o contrario do metodo up
    // Deletar tabela
    return knex.schema.dropTable('points');
}