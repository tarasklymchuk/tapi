import {RouteService} from '../../../bootstrap/services/Routes/RouteService'

class baseRouter extends RouteService {
    protected prefix = '/';

    /**
     * init routes
     */
    protected routes() {
        this.router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
    }
}

export const apiRouter = (new baseRouter()).boot();