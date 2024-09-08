const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';


/* Criar ou Acessar o Banco de Dados */
use(database);

/*Altera os dados de um documento da collection*/
db[collection].updateMany(
    {
         "cod_aluno": "12345" 
    },
    {
        $set:{
            "nome": "Carlos Santos",
            "cpf": "98765432100",
            "rg": "987654321"
            }
    }
)
