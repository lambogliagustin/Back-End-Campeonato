import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Equipo = sequelize.define('equipos', {
    equipo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    pais_representado: {
        type: Sequelize.STRING
    },
    club: {
        type: Sequelize.STRING
    },
    entrenador: {
        type: Sequelize.STRING
    },
},
    {
        timestamps: false
    }
);

export default Equipo;