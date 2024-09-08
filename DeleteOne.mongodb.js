const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database)

db[collection].deleteOne(

    { "cod_aluno": "12348" } 

)