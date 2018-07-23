import {Request, Response, NextFunction} from 'express';
import {Controller} from "./Controller";

const Heroes = require('../../../Data/heroes.json');

export class heroController extends Controller {
    /**
     * GET all Heroes.
     */
    public index(req: Request, res: Response, next: NextFunction) {
        res.send(Heroes);
    }

    /**
     * Get one hero
     *
     * @param {Request} req
     * @param {Response} res
     * @param {e.NextFunction} next
     */
    public view(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let hero = Heroes.find(hero => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    hero
                });
        }
        else {
            res.status(404)
                .send({
                    message: 'No hero found with the given id.',
                    status: res.status
                });
        }
    }
}