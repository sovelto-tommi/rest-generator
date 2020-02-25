const request = require('supertest');
const app = require('../../app');

test('users API is available', (done) => {
    request(app)
        .get('/api/users')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body.message).toMatch(/Hello Express/i);
            done();
        })
});
