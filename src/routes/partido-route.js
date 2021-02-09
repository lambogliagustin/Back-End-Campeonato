import {Router} from 'express';
import { createPartido, getPartidos, getOnePartido, deletePartido, updatePartido } from '../controllers/partido.controller';

const router = Router();

// api/partidos/
router.post('/', createPartido);
router.get('/', getPartidos);

// api/partidos/:partido_id
router.get('/:partido_id', getOnePartido);
router.delete('/:partido_id', deletePartido);
router.put('/:partido_id', updatePartido);


export default router;