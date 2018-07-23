import * as express from 'express';
import {heroRoute} from "../../../Routes/HeroRouter";
import * as fs from 'fs';

class BootRoute {

    onLoad(app): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        app.use('/', router);
        // placeholder route handler
        app.use('/api/v1/heroes', heroRoute);

    }
}

export const BootRoutes: BootRoute = new BootRoute();