import {Router} from 'express';
import { createEquipo, getEquipos, getOneEquipo, deleteEquipo, updateEquipo } from '../controllers/equipo.controller';

const router = Router();

// api/equipos/
router.post('/', createEquipo);
router.get('/', getEquipos);

// api/equipos/:equipo_id
router.get('/:equipo_id', getOneEquipo);
router.delete('/:equipo_id', deleteEquipo);
router.put('/:equipo_id', updateEquipo);


export default router;