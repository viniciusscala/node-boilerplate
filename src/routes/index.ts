import { Router } from 'express';
import appUserRouter from './appUserRouter.routes';

const routes = Router();

routes.use('/class', appUserRouter);

export default routes;
