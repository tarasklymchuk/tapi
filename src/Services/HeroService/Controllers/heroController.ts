import {Request, Response} from "express";
import {Param, Get, Req, Res, JsonController} from "routing-controllers";

const Heroes = require('../../../../Data/heroes.json');

@JsonController()
export class heroController {
    /**
     * GET all Heroes.
     */
    @Get("/heroes")
    public index(@Req() request: Request, @Res() response: Response) {
        return response.send(Heroes);
    }

    /**
     * Get one hero
     *
     * @param {Request} req
     * @param {Response} res
     * @param {e.NextFunction} next
     */
    @Get("/heroes/:id")
    public view(@Param("id") id: number, @Req() request: Request, @Res() response: Response) {
        let hero = Heroes.find((item) => item.id === id);
        if (hero) {
            return response.status(200)
                .send({
                    message: 'Success',
                    status: response.status,
                    hero
                });
        }
        else {
            response.status(404)
                .send({
                    message: 'No hero found with the given id.',
                    status: response.status
                });
        }
    }
}