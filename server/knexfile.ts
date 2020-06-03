import path from 'path';

module.exports = { // esse arquivo nao podemos usar a sintaxe 'exports default', porque o knex nao suporta essa sintaxe
    client: 'sqlite3', // Codigo base igual de connections
    connection:{
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite' ) // virgula == barra
    },
    // Coisas a mais
    migrations:{ // pasta onde estao as migrations
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};