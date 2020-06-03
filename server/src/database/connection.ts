// Arquivo pela conexao com o banco

import knex from 'knex'; // importamos o knex
import path from 'path'; // biblioteca para trabalhar com caminhos, serve para padronizar acesso e caminhos

const connection = knex({ // recebe um objeto com as configuracoes do Banco de Dados
    client: 'sqlite3', // Dizemos qual banco de dados estamos usando
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite' ) //dirname retorna o diretorio que esta o arquivo; Criamos no diretorio database o arquivo do banco de dados database.sqlite
    },
    useNullAsDefault: true,
});

export default connection; // exportamos a conexao com o banco de dados