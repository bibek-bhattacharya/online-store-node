import {expect} from 'chai';
import {describe} from 'mocha';

import app from '../src/app';
import {agent as request} from 'supertest';

describe("Given an initial state database", () => {

    it('should succeed GET /v1/products', async function () {
        const res = await request(app).get('/v1/products')
        expect(res.status).to.equal(200);

        expect(res.body.length).equal(3);

        expect(res.body[0].id).equal(1);
        expect(res.body[0].name).equal("Lavender heart");
        expect(res.body[0].price).equal("9.25");

        expect(res.body[1].id).equal(2);
        expect(res.body[1].name).equal("Personalised cufflinks");
        expect(res.body[1].price).equal("45.00");

        expect(res.body[2].id).equal(3);
        expect(res.body[2].name).equal("Kids T-shirt");
        expect(res.body[2].price).equal("19.95");
    });

    it('should fail GET (non-existent) /v1/product/400', async function () {
        const res = await request(app).get('/v1/product/400')
        expect(res.status).to.equal(404);
    });
    
    it('should succeed POST /v1/product', async function () {
        const res = await request(app)
            .post('/v1/product').send({
                "name": "TestName",
                "price": "9.93"
            });
        expect(res.status).to.equal(200);
    });

    it('should succeed GET (new) /v1/product/4', async function () {
        const res = await request(app).get('/v1/product/4')
        expect(res.status).to.equal(200);

        expect(res.body.id).equal(4);
        expect(res.body.name).equal("TestName");
        expect(res.body.price).equal("9.93");
    });

    it('should succeed PUT /v1/product/4', async function () {
        const res = await request(app)
            .put('/v1/product/4').send({
                "name": "UpdatedTestName"
            });
        expect(res.status).to.equal(200);
    });

    it('should succeed GET (updated) /v1/product/4', async function () {
        const res = await request(app).get('/v1/product/4')
        expect(res.status).to.equal(200);

        expect(res.body.id).equal(4);
        expect(res.body.name).equal("UpdatedTestName");
        expect(res.body.price).equal("9.93");
    });

    it('should succeed DELETE /v1/product/4', async function () {
        const res = await request(app)
            .delete('/v1/product/4');
        expect(res.status).to.equal(200);
    });

    it('should fail GET (non-existent) /v1/product/4', async function () {
        const res = await request(app).get('/v1/product/4')
        expect(res.status).to.equal(404);
    });

});



