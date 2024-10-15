import request from 'supertest';
import {serve} from './index.js'; 

describe('Express Server Tests', () => {
    let server;

    beforeAll((done) => {
        server = serve('tmp', 8000); // サーバーを初期化
        // サーバーがリッスンするのを待つ
        server.listen(8000, () => {
            done();
        });
    });

    afterAll((done) => {
        server.close(done); // サーバーをクローズ
    });

    test('GET /test/mirror', async () => {
        const response = await request(server)
            .get('/test/mirror')
            .set('Accept', 'text/plain');

        expect(response.status).toBe(200);
        expect(response.text).toMatch(/GET \/test\/mirror HTTP/);
    });

    test('GET /example.html', async () => {
        // テスト用のファイルがある場合のテスト
        const response = await request(server)
            .get('/example.html'); // example.html ファイルを指定

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
    });

    test('GET /non-existent', async () => {
        const response = await request(server)
            .get('/non-existent');

        expect(response.status).toBe(404);
        expect(response.text).toContain('No such file or directory');
    });
});
