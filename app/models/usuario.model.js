/*Mapeia a tabela name do banco de dados */

const { Sequelize } = require("sequelize/dist");

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id_usuario:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });

    return Usuario;
};