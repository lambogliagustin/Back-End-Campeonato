import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Torneo from './Torneo';

const Etapa = sequelize.define('etapas', {
    etapa_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    anterior_etapa_id: {
        type: Sequelize.INTEGER
    },
    siguiente_etapa_id: {
        type: Sequelize.INTEGER
    },
    torneo_id: {
        type: Sequelize.INTEGER
    },
},
    {
        timestamps: false
    }
);

//Relaciones "hasOne/hasMany"
Etapa.hasOne(Etapa, { foreignKey: 'etapa_id', sourceKey: 'anterior_etapa_id', as: 'etapaAnterior' });
Etapa.hasOne(Etapa, { foreignKey: 'etapa_id', sourceKey: 'siguiente_etapa_id', as: 'etapaSiguiente' });

Torneo.hasMany(Etapa, { foreignKey: 'torneo_id' });


//Relaciones "belongsTo/belongsToMany"
Etapa.belongsTo(Etapa, { foreignKey: 'etapa_id', as: 'equipo1' });
Etapa.belongsTo(Etapa, { foreignKey: 'etapa_id', as: 'equipo2' });

Etapa.belongsTo(Torneo, { foreignKey: 'torneo_id' });


export default Etapa;