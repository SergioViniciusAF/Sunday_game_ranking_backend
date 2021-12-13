/* Configurações do banco de dados */

module.exports ={
    dbURL:'postgres://zvpvsiwi:kwdbFaouKMrQBFXJioXfzLJOp25Xk305@kesavan.db.elephantsql.com/zvpvsiwi',
     dialect: "postgres",
     pool : {
         max: 5,
         min:0,
         acquire: 30000,
         idle: 10000
     }
     
 };