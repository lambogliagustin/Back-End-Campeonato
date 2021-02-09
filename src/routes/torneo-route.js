import {Router} from 'express';
import { createTorneo, getTorneos, getOneTorneo, deleteTorneo, updateTorneo } from '../controllers/torneo.controller';

const router = Router();

// api/torneos/
router.post('/', createTorneo);
router.get('/', getTorneos);

// api/torneos/:torneo_id
router.get('/:torneo_id', getOneTorneo);
router.delete('/:torneo_id', deleteTorneo);
router.put('/:torneo_id', updateTorneo);


export default router;