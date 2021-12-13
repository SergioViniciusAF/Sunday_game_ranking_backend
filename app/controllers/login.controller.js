/* Gravar senha encriptado e recupera o senha desencriptado */

const db = require("../models");
// peguei isso do models/usuario.js
const Usuario = db.Usuario;
 
exports.findOne = (req, res) =>{
  //variaveis para amarzenar os parametros (email, senha) la do post
    const emailLogin = req.params.email;
    const senhaLogin = req.params.senha;
    
     Usuario.findOne({where :{email:emailLogin,senha:senhaLogin}})
     .then(data =>{
    
         if (data){

             res.send({sucesso: true});
         }else {
             res.status(404).send({
                sucesso: false
             });
         }
     })
     .catch(err =>{
         res.status(500).send({
             message: "Erro ao recuperar login"
         });
     });
    
    };
