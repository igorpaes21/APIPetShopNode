const express = require('express')
const ControllerClientes = require('../controllers/clientes.js')
const ControllerCachorro = require('../controllers/cachorro.js')
const ControllerAtendimento = require('../controllers/atendimento.js')

const controllerCliente = new ControllerClientes()
const router = express.Router()

router.get('/api/clientes/:id', controllerCliente.PegarUm)
router.get('/api/clientes/', controllerCliente.PegarTodos)
router.post('/api/clientes', controllerCliente.Add)
router.put('/api/clientes/:id', controllerCliente.Update)
router.delete('/api/clientes/:id', controllerCliente.Delete)

const controllerCachorro = new ControllerCachorro()
const routers = express.Router()

router.get('/api/cachorro/:id', controllerCachorro.PegarUm)
router.get('/api/cachorro/', controllerCachorro.PegarTodos)
router.post('/api/cachorro', controllerCachorro.Add)
router.put('/api/cachorro/:id', controllerCachorro.Update)
router.delete('/api/cachorro/:id', controllerCachorro.Delete)

const controllerAtendimento = new ControllerAtendimento()
const routerss = express.Router()

router.get('/api/atendimento/:id', controllerAtendimento.PegarUm)
router.get('/api/atendimento/', controllerAtendimento.PegarTodos)
router.post('/api/atendimento', controllerAtendimento.Add)
router.put('/api/atendimento/:id', controllerAtendimento.Update)
router.delete('/api/atendimento/:id', controllerAtendimento.Delete)



module.exports = router