/*Mapeia a tabela name do banco de dados */

const { Sequelize } = require("sequelize/dist");

module.exports = (sequelize, Sequelize) => {
    const Partida = sequelize.define("partida", {
        pontuacao: {
            type: Sequelize.INTEGER,
            
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Usuario',
                key: 'id_usuario'
            } 
        },
        id_ranking: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Ranking',
                key: 'id_ranking'
            } 
        }

    });

    return Partida;
};