import express, { Application } from "express";
import cors from "cors";


import 'express-async-errors';
import { json, urlencoded } from 'body-parser';
import {AppRouter} from "routes";
import { errorHandler } from "middlewares/errorHandler";
import { NotFoundError } from "errors/notFoundError";


import { useMorgan } from "middlewares/morgan";

class Server {
  private app: Application;
  private port:string;
  constructor() {
    this.app = express();
    this.port=process.env.PORT!
  }
  middlewares() {
   
   useMorgan(this.app)
    this.app.use(json({ limit: '1024mb' }));
    this.app.use(urlencoded({ limit: '1024mb', extended: true }));
    this.app.use(cors());
    this.app.use("/", AppRouter);
    this.app.all('*', (req, res,next) => {
      throw new NotFoundError();
    });

    this.app.use(errorHandler);
  }
  execute() {
    this.middlewares();
    this.app.listen( this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}
export default Server;
