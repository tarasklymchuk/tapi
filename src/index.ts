import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import App from "./App";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const Application = createExpressServer(App);

/**
 * Start the express app.
 */
Application.listen(3000);
console.log("Server is up and running at port 3000");

module.exports = Application;