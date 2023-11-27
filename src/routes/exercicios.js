import express from 'express';
import ControllerExercicio from '../controllers/exercicios.js';

const router = express.Router();
const controller = new ControllerExercicio();

router.get('/api/nomes/', controller.PegarTodos);
router.get('/api/nome/:index', controller.PegarUm);
router.post('/api/nome', controller.Adicionar);
router.put('/api/nome/:index', controller.Alterar);
router.delete('/api/nome/:index', controller.Deletar);

export default router;
