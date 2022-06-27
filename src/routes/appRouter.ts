import express, { Response, Request } from 'express';
import ExampleRouter from './example';

const AppRouter = express.Router();

AppRouter.use('/example', ExampleRouter);



export default AppRouter;
