import {Router} from 'express';
import {RouteServiceInterface} from '../../interfaces/RouteServiceInterface'

export class RouteService implements RouteServiceInterface {
    public router;

    /**
     * init express route callable
     */
    constructor() {
        this.router = Router();
    }

    /**
     * router callable
     *
     * @returns {e.Router}
     */
    public onRoutes() {
        this.routes();
        return this.router;
    }

    /**
     * Base route method for set route
     */
    protected routes() {

    }
}