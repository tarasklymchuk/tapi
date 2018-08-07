import "reflect-metadata";
import * as http from "http";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import App from "./App";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * Get port for running server
 *
 * @type {number | string | boolean}
 */
const port = normalizePort(process.env.PORT || 3000);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
let server = createExpressServer(App);

/**
 * Starting http server
 *
 * @type {module:http.Server}
 */
const Application = http.createServer(server);

/**
 * Start the express app.
 */
Application.listen(port);

/**
 * handle errors and listening
 */
Application.on('error', onError);
Application.on('listening', onListening);

/**
 * Normalize port
 *
 * @param {number | string} val
 * @returns {number | string | boolean}
 */
function normalizePort(val: number | string): number | string | boolean {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}

/**
 * Handle errors
 *
 * @param {NodeJS.ErrnoException} error
 */
function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * handle listening
 */
function onListening(): void {
    let address = Application.address();
    let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
    console.log(`Server is up and running at ${bind}`);
}

/**
 * export server for running test
 *
 * @type {module:http.Server}
 */
module.exports = Application;