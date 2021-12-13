/*Mapeia a tabela name do banco de dados */

const { Sequelize } = require("sequelize/dist");

module.exports = (sequelize, Sequelize) => {
    const Ranking = sequelize.define("ranking", {
        id_ranking:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_jogo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantidade_rodadas: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        numero_participantes: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        numero_rodada: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Usuario',
                key: 'id_usuario'
            } 
        }
        

    });

    return Ranking;
};