import chai from 'chai'
import { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import { Express } from "express"
import bootstrap from "../config/bootstrap"
import UsersService from '../services/UsersService'

chai.use(chaiHttp)

let app: Express
let stub: any

describe('Test UsersController', () => {
    before(async () => {
        stub = sinon.stub(UsersService.prototype, 'getAll').resolves('custom')
        app = await bootstrap()
    });

    after(async () => stub.restore())

    it('GET /api/v1/users', async () => {
        const res = await chai.request(app)
            .get('/api/v1/users')
            console.log(res.text)
        expect(stub.called).to.be.true
        expect(res).to.have.status(200)
    })

});

