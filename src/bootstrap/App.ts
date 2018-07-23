import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {BootRoutes} from './services/Routes/BootRoute'

// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    public express: express.Application;
    public bootRouter = BootRoutes;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.bootRouter.onLoad(this.express);
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }
}

export default new App().express;
