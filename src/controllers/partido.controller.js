import Equipo from '../models/Equipo';
import Partido from '../models/Partido';

export async function createPartido(req, res) {
    const { fecha_hora, equipo1_id, equipo2_id, puntos_equipo1, puntos_equipo2, orden_partido, estado, etapa_id } = req.body;
    const newPartido = await Partido.create({
        fecha_hora,
        orden_partido,
        estado,
        equipo1_id,
        equipo2_id,
        puntos_equipo1,
        puntos_equipo2,
        etapa_id
    }, {
        fields: ['fecha_hora', 'equipo1_id', 'equipo2_id', 'puntos_equipo1', 'puntos_equipo2', 'orden_partido', 'estado', 'etapa_id']
    });
    res.json('Se ha creado una nueva Partido exitosamente');
}

export async function getPartidos(req, res) {
    const partidos = await Partido.findAll({
        include: [
            { model: Equipo, as: 'equipo1' },
            { model: Equipo, as: 'equipo2' },
        ],
        order: [
            ['orden_partido', 'ASC']
        ]
    });
    res.json(partidos);
}

export async function getOnePartido(req, res) {
    const { partido_id } = req.params;
    const partido = await Partido.findOne({
        include: [
            { model: Equipo, as: 'equipo1' },
            { model: Equipo, as: 'equipo2' },
        ],
        where: {
            partido_id
        }
    });

    res.json(partido);
}

export async function deletePartido(req, res) {
    const { partido_id } = req.params;
    await Partido.destroy({
        where: {
            partido_id
        }
    });
    res.json('Se ha eliminado el Partido exitosamente');
}

export async function updatePartido(req, res) {
    const { partido_id } = req.params;
    const { fecha_hora, equipo1_id, equipo2_id, puntos_equipo1, puntos_equipo2, orden_partido, estado, etapa_id} = req.body;

    await Partido.findOne({
        include: [
            { model: Equipo, as: 'equipo1' },
            { model: Equipo, as: 'equipo2' }
        ],
        attributes: ['fecha_hora', 'equipo1_id', 'equipo2_id', 'puntos_equipo1', 'puntos_equipo2', 'orden_partido', 'estado', 'etapa_id'],
        where: { partido_id }
    });

    const updatedPartido = await Partido.update({
        fecha_hora,
        equipo1_id,
        equipo2_id,
        puntos_equipo1,
        puntos_equipo2,
        orden_partido,
        estado,
        etapa_id
    }, {
        where: { partido_id }
    });

    res.json({
        message: 'Partido actualizado',
        updatedPartido
    });
}
