const RepositoriesClientes = require("../repositories/clientes.js");

const repositorio = new RepositoriesClientes()

class ServicoClientes {
    
    VerficarClientes(clientes) {
        if(!clientes){
            throw new Error('Não foi enviada a clientes para adicionar');
        } else if(!clientes.nome){
            throw new Error('Não foi enviado o nome do cliente');
        } else if(!clientes.email){
            throw new Error('Não foi enviado o email do cliente');
        } else if(!clientes.senha){
            throw new Error('Não foi enviado a senha do cliente');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(clientes, transaction) {
        this.VerficarPessoa(clientes)

        return repositorio.Add(clientes, transaction);
    }

    async Update(id, clientes) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cliente para alterar');
        } 
        this.VerficarClientes(clientes)

        return repositorio.Update(id, clientes);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoClientes