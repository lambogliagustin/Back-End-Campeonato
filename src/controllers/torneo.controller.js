import Torneo from '../models/Torneo';
import Etapa from '../models/Etapa';
import Partido from '../models/Partido';
import Equipo from '../models/Equipo';
import Jugador from '../models/Jugador';

export async function createTorneo(req, res) {
    const { nombre, lugar, fecha_inicio, fecha_fin, jugadores_por_equipo, observaciones } = req.body;
    const newTorneo = await Torneo.create({
        nombre,
        lugar,
        fecha_inicio,
        fecha_fin,
        jugadores_por_equipo,
        observaciones
    }, {
        fields: ['nombre', 'lugar', 'fecha_inicio', 'fecha_fin', 'jugadores_por_equipo', 'observaciones']
    });
    res.json({
        message: 'Se ha creado una nueva Torneo exitosamente'
    });
}

export async function getTorneos(req, res) {
    const torneos = await Torneo.findAll({
        attributes: ['torneo_id', 'nombre', 'lugar', 'fecha_inicio', 'fecha_fin', 'jugadores_por_equipo', 'observaciones'],
        order: [
            ['torneo_id', 'DESC']
        ]
    });
    res.json(torneos);
}

export async function getOneTorneo(req, res) {
    const { torneo_id } = req.params;
    const torneo = await Torneo.findOne({
        include: [{
             model: Etapa, include: [
                {
                    model: Partido,
                    include: [
                        {
                            model: Equipo, as: 'equipo1',
                            include: [
                                Jugador
                            ]
                        },
                        {
                            model: Equipo, as: 'equipo2',
                            include: [
                                Jugador
                            ]
                        }
                    ],
                    order: [
                        ['orden_partido']
                    ]
                }
            ]
        }],
        where: {
            torneo_id
        }
    });

    res.json(torneo);
}

export async function deleteTorneo(req, res) {
    const { torneo_id } = req.params;
    await Torneo.destroy({
        where: {
            torneo_id
        }
    });
    res.json({
        message: 'Se ha eliminado el Torneo exitosamente'
    });
}

export async function updateTorneo(req, res) {
    const { torneo_id } = req.params;
    const { nombre, lugar, fecha_inicio, fecha_fin, jugadores_por_equipo, observaciones } = req.body;

    await Torneo.findOne({
        attributes: ['torneo_id', 'nombre', 'lugar', 'fecha_inicio', 'fecha_fin', 'jugadores_por_equipo', 'observaciones'],
        where: { torneo_id }
    });

    const updatedTorneo = await Torneo.update({
        nombre,
        lugar,
        fecha_inicio,
        fecha_fin,
        jugadores_por_equipo,
        observaciones
    }, {
        where: { torneo_id }
    });

    res.json({
        message: 'Torneo actualizado',
        updatedTorneo
    });
}
