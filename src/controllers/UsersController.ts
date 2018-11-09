import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers"
import UsersService from "../services/UsersService"
import { Inject } from "typedi";

@JsonController()
export default class UsersController {

    @Inject()
    private service!: UsersService

    @Get("/v1/users")
    async getAll() {
        return await this.service.getAll()
    }

    @Get("/users/:id")
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post("/users")
    async post(@Body() user: any) {
        return await this.service.create(user)
    }

    @Put("/users/:id")
    async put(@Param("id") id: number, @Body() user: any) {
        return await this.service.update(id, user)
    }

    @Delete("/users/:id")
    async remove(@Param("id") id: number) {
        return await this.service.remove(id)
    }

}