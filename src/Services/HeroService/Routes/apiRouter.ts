import {RouteService} from '../../../bootstrap/services/Routes/RouteService'
import {heroController} from "../Controllers/heroController";

class ApiRouter extends RouteService {
    public controller: heroController = new heroController();
    protected prefix = '/api/v1/heroes';

    /**
     * init routes
     */
    protected routes() {
        this.router.get(this.prefix + '/', this.controller.index);
        this.router.get(this.prefix + '/:id', this.controller.view);
    }
}

export const apiRouter = (new ApiRouter()).boot();