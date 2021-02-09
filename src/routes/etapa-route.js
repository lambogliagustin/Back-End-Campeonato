import {Router} from 'express';
import { createEtapa, getEtapas, getOneEtapa, deleteEtapa, updateEtapa } from '../controllers/etapa.controller';

const router = Router();

// api/etapas/
router.post('/', createEtapa);
router.get('/', getEtapas);

// api/etapas/:etapa_id
router.get('/:etapa_id', getOneEtapa);
router.delete('/:etapa_id', deleteEtapa);
router.put('/:etapa_id', updateEtapa);


export default router;