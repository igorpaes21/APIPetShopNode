const Clientes = require('./clientes.js')
const Atendimento = require('./atendimento.js')
const Cachorro = require('./cachorro.js');
const { DataTypes } = require('sequelize')
const conexao = require('../database.js');

const clientes = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

// Cachorro.belongsTo(Cachorro, {foreignKey: 'clienteId'})
// Clientes.hasMany(Clientes, {foreignKey: 'clienteId'})

module.exports = clientes