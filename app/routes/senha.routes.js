/* Configuração da rota */

module.exports= app => {

    const senha = require ("../controllers/senha.controller.js");
    var router = require("express").Router();

    // Grava o nome encriptado
    router.post("/",senha.create);

    // Recupera o nome desencriptado pelo Id
    router.get("/:id", senha.findOne);

    // Caminho da rota 
    app.use('/encripts', router);
};
