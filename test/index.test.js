const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals')
const ServicoClientes = require("../src/services/clientes.js")
const conexao = require('../src/database.js')

describe('Testes clientes', () => {

   beforeAll(async () => {
      this.save = await conexao.transaction()
   })
   afterAll(async () => {
      this.save.rollback()
   })

   const servico = new ServicoClientes()
   
   it('Should get person', async () => {
      const result = await servico.PegarUm(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste@teste.com');
      expect(result.senha).toBe('123456');
   })

   it('Should create a person', async () => {
      const result = await servico.Add({
         nome: 'joao',
         email: 'teste2@teste.com',
         senha: '123456'
      }, this.save)

      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste2@teste.com');
      expect(result.senha).toBe('123456');
   })

})