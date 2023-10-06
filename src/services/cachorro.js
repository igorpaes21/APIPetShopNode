const RepositoriesCachorro = require("../repositories/cachorro.js");

const repositorio = new RepositoriesCachorro()

class ServicoCachorro {
    
    VerificarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviada a cachorro para adicionar');
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome da cachorro');
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
        this.VerificarCachorro(cachorro)

        return repositorio.Add(cachorro, transaction);
    }

    async Update(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da cachorro para alterar');
        } 
        this.VerificarCachorro(cachorro)

        return repositorio.Update(id, cachorro);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoCachorro