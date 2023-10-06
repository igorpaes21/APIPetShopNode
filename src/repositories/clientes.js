const Clientes = require('../models/clientes.js');

class RepositoriesClientes {

    async PegarUm(id, transaction) {
        return Clientes.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return Clientes.findAll();
    }

    async Add(clientes, transaction) {
        const result = await Clientes.create(clientes, { transaction })

        return result
    }

    async Update(id, pessoa) {
        const result = await Clientes.update(clientes, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Clientes.destroy({
            where: { id }
        });
    }

}

module.exports = RepositoriesClientes