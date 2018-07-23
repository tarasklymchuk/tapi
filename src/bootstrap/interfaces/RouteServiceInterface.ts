import {Router} from "express";

export interface RouteServiceInterface {
    router: Router;

    onRoutes(): Router;
}