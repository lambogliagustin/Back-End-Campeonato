import Equipo from '../models/Equipo';

export async function createEquipo(req, res) {
    const { nombre, pais_representado, club, entrenador } = req.body;
    const newEquipo = await Equipo.create({
        nombre,
        pais_representado,
        club,
        entrenador
    }, {
        fields: ['nombre', 'pais_representado', 'club', 'entrenador']
    });
    res.json({
        message: 'Se ha creado un nuevo Equipo exitosamente'
    });
}

export async function getEquipos(req, res) {
    const equipos = await Equipo.findAll({
        //attributes: ['nombre', 'pais_representado', 'club', 'entrenador'],
        order: [
            ['equipo_id', 'DESC']
        ]
    });
    res.json(equipos);
}

export async function getOneEquipo(req, res) {
    const { equipo_id } = req.params;
    const equipo = await Equipo.findOne({
        where: {
            equipo_id
        }
    });

    res.json(equipo);
}

export async function deleteEquipo(req, res) {
    const { equipo_id } = req.params;
    await Equipo.destroy({
        where: {
            equipo_id
        }
    });
    res.json({
        message: 'Se ha eliminado el Equipo exitosamente'
    });
}

export async function updateEquipo(req, res) {
    const { equipo_id } = req.params;
    const { nombre, pais_representado, club, entrenador } = req.body;

    await Equipo.findOne({
        attributes: ['nombre', 'pais_representado', 'club', 'entrenador'],
        where: { equipo_id }
    });

    const updatedEquipo = await Equipo.update({
        nombre,
        pais_representado,
        club,
        entrenador
    }, {
        where: { equipo_id }
    });

    res.json({
        message: 'Equipo actualizado',
        updatedEquipo
    });
}
