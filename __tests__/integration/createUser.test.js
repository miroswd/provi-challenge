const request = require('supertest');
const app = require('../../src')

describe('User', () => {
  it('should be able to register',  async () => {
    const response = await request(app).post('/user').send({
      email:'user@user.com',
      password:'123456'
    })

    expect(response.body).toHaveProperty('token')
   });
});
