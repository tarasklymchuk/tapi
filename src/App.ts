import {heroController} from "./Services/HeroService/Controllers/heroController";

class App {
    onLoad() {
        return {
            routePrefix: '/api/v1',
            /**
             * We can add options about how routing-controllers should configure itself.
             * Here we specify what controllers should be registered in our express server.
             */
            controllers: [
                heroController
            ]
        }
    }
}

export default new App().onLoad();