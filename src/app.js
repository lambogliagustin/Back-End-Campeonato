import express, {json} from 'express';
import morgan from 'morgan';

//importing routes
import torneoRoutes from './routes/torneo-route';
import equipoRoutes from './routes/equipo-route';
import jugadorRoutes from './routes/jugador-route';
import etapaRoutes from './routes/etapa-route';
import partidoRoutes from './routes/partido-route';

//initializations
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/torneos', torneoRoutes);
app.use('/equipos', equipoRoutes);
app.use('/jugadores', jugadorRoutes);
app.use('/etapas', etapaRoutes);
app.use('/partidos', partidoRoutes);


export default app;