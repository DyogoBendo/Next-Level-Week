import express from 'express';

// Ao usar TypeScript, as bibliotecas precisam vir com as definicoes de tipo

const app = express();

app.get('/users', (request, response)=>{
    // Request -> o que é requisitado pela aplicação
    //Response -> o que é retornado pela aplicação, geralmente feito em JSON
    console.log('Listagem de usuarios');

    // JSON

    // response.send('<head> <style> body {background: #232323; color: white}</style> </head> <h1> Hello world <h1>');
    
    response.json([
        'Diego',
        'Cleiton',
        "Robson",
        "Adalberto"
    ]);
});

app.listen(3333);