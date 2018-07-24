import * as express from 'express';
import * as fs from 'fs';

class BootRoute {

    protected path = './src/Services/';

    onLoad(app): void {
        fs.readdir(this.path, (err, files) => {
            files.forEach((file) => {
                let newPath = '../../../Services/' + file;
                let router = require(newPath + "/Routes/apiRouter");
                app.use(router.apiRouter);
                console.log('Load routes for ' + file.match(/([A-Z]?[^A-Z]*)/g).join(" ") + '\t\t\t OK');
            });
        });
    }


}

export const BootRoutes: BootRoute = new BootRoute();