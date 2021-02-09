import {Router} from 'express';
import { createJugador, getJugadores, getOneJugador, deleteJugador, updateJugador, getJugadorByEquipo } from '../controllers/jugador.controller';

const router = Router();

// api/jugadores/
router.post('/', createJugador);
router.get('/', getJugadores);

// api/jugadores/:jugador_id
router.get('/:jugador_id', getOneJugador);
router.delete('/:jugador_id', deleteJugador);
router.put('/:jugador_id', updateJugador);



// /api/jugadores/equipo/:equipo_id
router.get('/equipo/:equipo_id', getJugadorByEquipo);


export default router;