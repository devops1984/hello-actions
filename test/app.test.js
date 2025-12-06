const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('returns greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, GitHub Actions!' });
  });
});
