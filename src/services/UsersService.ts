import { NotFoundError, InternalServerError, BadRequestError, UnauthorizedError } from "routing-controllers";
import { AssertionError } from "assert";
import { Service } from "typedi";

@Service('discovery')
export default class UsersService {

    constructor(){
        console.log('inside UsersService')
    }
    async getAll() {
        return "This action returns all users"
    }

    async getOne(id: number) {
        return "This action returns user #" + id
    }

    async create(user: any) {
        return "Saving user..."
    }

    async update(id: number, user: any) {
        return "Updating a user..."
    }

    async remove(id: number) {
        return "Removing user..."
    }

}