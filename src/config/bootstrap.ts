import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import { createExpressServer, useContainer } from "routing-controllers"
import { Container } from "typedi"

export default async function (): Promise<express.Express> {
    const app = createExpressServer({
        routePrefix: "/api",
        controllers: [__dirname + "/../controllers/**/*.ts", __dirname + "/../controllers/**/*.js"]
    });
    useContainer(Container)// for DI

    return app
}