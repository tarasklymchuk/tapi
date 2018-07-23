import {Router} from 'express';
import {RouteService} from '../bootstrap/services/Routes/RouteService'
import {heroController} from "../Services/Controllers/heroController";

class HeroRouter extends RouteService {
    public controller: heroController = new heroController();

    /**
     * init routes
     */
    protected routes() {
        this.router.get('/', this.controller.index);
        this.router.get('/:id', this.controller.view);
    }
}

export const heroRoute: Router = (new HeroRouter()).onRoutes();