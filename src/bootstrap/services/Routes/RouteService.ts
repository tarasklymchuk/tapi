import {Router} from 'express';
import {RouteServiceInterface} from '../../interfaces/RouteServiceInterface'

export class RouteService implements RouteServiceInterface {
    public router;
    protected prefix = '/';

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
    public boot(): Router {
        this.routes();
        // this.apiPrefix();
        this.middleware();
        return this.router;
    }

    /**
     * Base route method for set route
     */
    protected routes() {

    }

    // protected apiPrefix():Router {
    //    return this.router.use(this.prefix, this.router);
    // }

    protected middleware() {

    }
}