const atendimento = require("../models/atendimento.js");
const RepositoriesAtendimento = require("../repositories/atendimento.js");

const repositorio = new RepositoriesAtendimento()

class ServicoAtendimento {
    
    VerificarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviada o atendimento para adicionar');
        } else if(!atendimento.nome){
            throw new Error('Não foi enviado o nome do atendimento');
        // } else if(!cachorro.email){
        //     throw new Error('Não foi enviado o email da cachorro');
        // } else if(!cachorro.senha){
        //     throw new Error('Não foi enviado o senha da cachorro');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cachorro, transaction) {
        this.Verificaratendimento(atendimento)

        return repositorio.Add(atendimento, transaction);
    }

    async Update(id, atendimento) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do atendimento para alterar');
        } 
        this.VerificarAtendimento(atendimento)

        return repositorio.Update(id, atendimento);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoAtendimento