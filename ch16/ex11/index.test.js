import request from 'supertest';
import serve from './index.js';

describe('HTTP Server', () => {
    let server;
    const PORT = 8000;

    before((done) => {
        server = serve();
        server.listen(PORT, done);
    });

    after((done) => {
        server.close(done);
    });

    it('"/"が GET されたときフォームのHTMLを返却する', (done) => {
        request(`http://localhost:${PORT}`)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, /Greeting Form/, done);
    });

    it('nameとgreeting の内容をボディに含む HTML を返却する', (done) => {
        request(`http://localhost:${PORT}`)
            .post('/greeting')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send('name=Hoge&greeting=Hello,World!')
            .expect('Content-Type', /html/)
            .expect(200)
            .expect(/Hello, John!/, done);
    });

    it('非対応のパスやメソッドに対する404または405レスポンス', (done) => {
        request(`http://localhost:${PORT}`)
            .get('/nonexistent')
            .expect(404, /404 Not Found/, done);
    });
});
