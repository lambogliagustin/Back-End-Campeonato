import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Equipo from './Equipo';
import Etapa from './Etapa';

const Partido = sequelize.define('partidos', {
    partido_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha_hora: {
        type: Sequelize.DATE
    },
    orden_partido: {
        type: Sequelize.INTEGER
    },
    estado: {
        type: Sequelize.STRING
    },
    puntos_equipo1: {
        type: Sequelize.INTEGER
    },
    puntos_equipo2: {
        type: Sequelize.INTEGER
    },
    equipo1_id: {
        type: Sequelize.INTEGER
    },
    equipo2_id: {
        type: Sequelize.INTEGER
    },
    etapa_id: {
        type: Sequelize.INTEGER
    },
},
    {
        timestamps: false
    }
);

//Relaciones "hasOne/hasMany"
Partido.hasOne(Equipo, { foreignKey: 'equipo_id', sourceKey: 'equipo1_id', as: 'equipo1' });
Partido.hasOne(Equipo, { foreignKey: 'equipo_id', sourceKey: 'equipo2_id', as: 'equipo2' });

Etapa.hasMany(Partido, { foreignKey: 'etapa_id' });

//Relaciones "belongsTo/belongsToMany"
Equipo.belongsTo(Partido, { foreignKey: 'equipo_id', as: 'equipo1' });
Equipo.belongsTo(Partido, { foreignKey: 'equipo_id', as: 'equipo2' });

Partido.belongsTo(Etapa, { foreignKey: 'etapa_id' });


export default Partido;