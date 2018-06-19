import {heroController} from "../Services/Controllers/heroController";
import {Routes} from "./Routes";

export class HeroRouter extends Routes {
    private controller: heroController;

    constructor() {
        super();
        this.controller = new heroController();
    }

    /**
     * init routes
     */
    protected init() {
        this.router.get('/', this.controller.getAll);
        this.router.get('/:id', this.controller.getOne);
    }

    /**
     * return routes
     *
     * @returns {e.Router}
     */
    public routes() {
        this.init();
        return this.router;
    }
}

const heroRoutes = new HeroRouter();
export default heroRoutes.routes();
