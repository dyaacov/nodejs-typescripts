import { expect } from 'chai'
import UsersService from './UsersService'

describe('Test UsersService', () => {
    let service: UsersService
    before(() => {
        service = new UsersService()
    })
    it('should return all users', async () => {
        const users = await service.getAll()
        expect(users).to.not.equal('sss')
    });
});