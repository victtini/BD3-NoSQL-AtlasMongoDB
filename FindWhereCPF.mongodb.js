const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database)

//cria ou acessar o banco de dados
db[collection].find(
    { "cpf": "12345678901" },  
    { "cod_aluno": 0 }          
);