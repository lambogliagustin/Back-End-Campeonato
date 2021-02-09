import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

//import Torneo from './Torneo';

const Torneo = sequelize.define('torneos', {
    torneo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    lugar: {
        type: Sequelize.STRING
    },
    fecha_inicio: {
        type: Sequelize.DATE
    },
    fecha_fin: {
        type: Sequelize.DATE
    },
    cantidad_equipos: {
        type: Sequelize.INTEGER
    },
    jugadores_por_equipo: {
        type: Sequelize.INTEGER
    },
    observaciones: {
        type: Sequelize.TEXT
    },
},
    {
        timestamps: false
    }
);

export default Torneo;