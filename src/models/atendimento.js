const Atendimento = require("./atendimento.js");
const Cachorro = require("./cachorro.js");
const Clientes = require('./clientes.js')
const { DataTypes } = require("sequelize");
const conexao = require("../database.js");


const atendimento = conexao.define(
  "atendimento",
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
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cachorro,
            key: 'id'
        }
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = atendimento;
