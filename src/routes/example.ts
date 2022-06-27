import { db } from 'database';
import express, { Response, Request } from 'express';

const ExampleRouter = express.Router();

ExampleRouter.get('/', (req:Request, res:Response)=>{
 db.connect();
 res.send({message:"example routes"})
});


export default ExampleRouter;
