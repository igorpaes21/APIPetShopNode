const Cachorro = require("./cachorro.js");
const Atendimento = require("./atendimento.js");
const Clientes = require('./clientes.js')
const { DataTypes } = require("sequelize");
const conexao = require("../database.js");


const cachorro = conexao.define(
  "cachorro",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    raca: {
        type: DataTypes.STRING,
    },
    clienteId: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Clientes,
            key: 'id'
        }
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = cachorro;
