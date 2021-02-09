import Etapa from '../models/Etapa';

export async function createEtapa(req, res) {
    const { nombre, torneo_id } = req.body;
    const newEtapa = await Etapa.create({
        nombre,
        torneo_id
    }, {
        fields: ['nombre', 'torneo_id']
    });
    res.json('Se ha creado una nueva Etapa exitosamente');
}

export async function getEtapas(req, res) {
    const etapas = await Etapa.findAll({
        include: [
            { model: Etapa, as: 'etapaAnterior',
            attributes: ['etapa_id', 'nombre'] },
            { model: Etapa, as: 'etapaSiguiente',
            attributes: ['etapa_id', 'nombre'] }
        ],
        //attributes: ['etapa_id', 'nombre', 'siguiente_etapa_id', 'anterior_etapa_id'],
        order: [
            ['etapa_id', 'DESC']
        ]
    });
    res.json(etapas);
}

export async function getOneEtapa(req, res) {
    const { etapa_id } = req.params;
    const etapa = await Etapa.findOne({
        where: {
            etapa_id
        }
    });

    res.json(etapa);
}

export async function deleteEtapa(req, res) {
    const { etapa_id } = req.params;
    await Etapa.destroy({
        where: {
            etapa_id
        }
    });
    res.json('Se ha eliminado la Etapa exitosamente');
}

export async function updateEtapa(req, res) {
    const { etapa_id } = req.params;
    const { nombre, torneo_id } = req.body;

    await Etapa.findOne({
        attributes: ['nombre', 'torneo_id'],
        where: { etapa_id }
    });

    const updatedEtapa = await Etapa.update({
        nombre,
        torneo_id
    }, {
        where: { etapa_id }
    });

    res.json('Etapa actualizada');

    // res.json({
    //     message: 'Etapa actualizada',
    //     updatedEtapa
    // });
}
