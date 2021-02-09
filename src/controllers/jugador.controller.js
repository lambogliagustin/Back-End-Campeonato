import Equipo from '../models/Equipo';
import Jugador from '../models/Jugador';

export async function createJugador(req, res) {
    const { nombre, equipo_id, posicion } = req.body;
    const newJugador = await Jugador.create({
        nombre,
        equipo_id,
        posicion
    }, {
        fields: ['nombre', 'posicion', 'equipo_id']
    });
    res.json({
        message: 'Se ha creado un nuevo Jugador exitosamente'
    });
}

export async function getJugadores(req, res) {
    const jugadores = await Jugador.findAll({
        include: [Equipo],
        order: [
            ['jugador_id', 'DESC']
        ]
    });
    res.json(jugadores);
}

export async function getOneJugador(req, res) {
    const { jugador_id } = req.params;
    const jugador = await Jugador.findOne({
        include: [Equipo],
        where: {
            jugador_id
        }
    });

    res.json(jugador);
}

export async function deleteJugador(req, res) {
    const { jugador_id } = req.params;
    await Jugador.destroy({
        where: {
            jugador_id
        }
    });
    res.json({
        message: 'Se ha eliminado el Jugador exitosamente'
    });
}

export async function updateJugador(req, res) {
    const { jugador_id } = req.params;
    const { nombre, equipo_id, posicion } = req.body;

    await Jugador.findOne({
        include: [Equipo],
        attributes: ['nombre', 'equipo_id', 'posicion'],
        where: { jugador_id }
    });

    const updatedJugador = await Jugador.update({
        nombre,
        equipo_id,
        posicion
    }, {
        where: { jugador_id }
    });

    res.json({
        message: 'Jugador actualizado',
        updatedJugador
    });
}

export async function getJugadorByEquipo(req, res) {
    const { equipo_id } = req.params;
    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'done', 'name'],
        where: { equipo_id }
    });
    res.json({ tasks });
}
