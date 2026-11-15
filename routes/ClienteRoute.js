import express from 'express'
import ClienteController from '../controllers/ClienteController.js'
const router = express.Router()


router.get('/', ClienteController.getAllClientes)
router.get('/:cpf', ClienteController.getCliente)
router.post('/', ClienteController.createCliente)
router.delete('/:cpf', ClienteController.deleteCliente)
router.put('/:cpf', ClienteController.updateCliente)

export default router;
