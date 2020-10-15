const request = require('supertest');
const app = require('../../src/app')

describe('register CPF', () => {
  beforeAll(async () => {
    const {token} = await request(app).post('/user').send({
      email:'user@user.com',
      password:'123456'
    })
  })
  it('should be able to register cpf', async () => {
    // const user =
    const response = await request(app).post('/user/infos/cpf').send({})
  })
})
