/* Configuração da rota  login*/

module.exports= app => {
 const login = require ("../controllers/login.controller.js")
   var router = require ("express").Router();
 // buscar usuario (email, senha)
   router.get ("/:email/:senha",login.findOne);
   app.use('/login',router);
 // salvar usuario (email, senha)


};