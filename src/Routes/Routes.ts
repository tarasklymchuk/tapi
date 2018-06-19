import {Router} from 'express';

export class Routes {
    router: Router;

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
    }
}