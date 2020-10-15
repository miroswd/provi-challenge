const request = require('supertest');
const app = require('../../src/app')

const {compare} = require('bcrypt');

const truncate = require('../util/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })
  it('should be able to register',  async () => {
    const response = await request(app).post('/user').send({
      email:'user@user.com',
      password:'123456'
    })
    expect(response.body).toHaveProperty('token')
   });

   it('not should be able to register with duplicated email',  async () => {
    await request(app).post('/user').send({
      email:'user@user.com',
      password:'123456'
    })

    const response = await request(app).post('/user').send({
      email:'user@user.com',
      password:'123456'
    })

    expect(response.status).toBe(400)
   });

   it('should be able to hash password',  async () => {
    const user = await request(app).post('/user').send({
      email:'user@user.com',
      password:'123456'
    })

    const {password} = user.body
    const compareHash = await compare('123456',password)

    expect(compareHash).toBe(true)
   });

   it('not should be able to register user with invalid datas', async () => {
     const response = await request(app).post('/user').send({})
     expect(response.status).toBe(400)
   })
});
