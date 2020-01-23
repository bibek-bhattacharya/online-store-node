"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const app_1 = require("../src/app");
const supertest_1 = require("supertest");
mocha_1.describe("Given an initial state database", () => {
    it('should succeed GET /v1/products', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default).get('/v1/products');
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body.length).equal(3);
            chai_1.expect(res.body[0].id).equal(1);
            chai_1.expect(res.body[0].name).equal("Lavender heart");
            chai_1.expect(res.body[0].price).equal("9.25");
            chai_1.expect(res.body[1].id).equal(2);
            chai_1.expect(res.body[1].name).equal("Personalised cufflinks");
            chai_1.expect(res.body[1].price).equal("45.00");
            chai_1.expect(res.body[2].id).equal(3);
            chai_1.expect(res.body[2].name).equal("Kids T-shirt");
            chai_1.expect(res.body[2].price).equal("19.95");
        });
    });
    it('should fail GET (non-existent) /v1/product/400', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default).get('/v1/product/400');
            chai_1.expect(res.status).to.equal(404);
        });
    });
    it('should succeed POST /v1/product', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default)
                .post('/v1/product').send({
                "name": "TestName",
                "price": "9.93"
            });
            chai_1.expect(res.status).to.equal(200);
        });
    });
    it('should succeed GET (new) /v1/product/4', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default).get('/v1/product/4');
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body.id).equal(4);
            chai_1.expect(res.body.name).equal("TestName");
            chai_1.expect(res.body.price).equal("9.93");
        });
    });
    it('should succeed PUT /v1/product/4', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default)
                .put('/v1/product/4').send({
                "name": "UpdatedTestName"
            });
            chai_1.expect(res.status).to.equal(200);
        });
    });
    it('should succeed GET (updated) /v1/product/4', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default).get('/v1/product/4');
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body.id).equal(4);
            chai_1.expect(res.body.name).equal("UpdatedTestName");
            chai_1.expect(res.body.price).equal("9.93");
        });
    });
    it('should succeed DELETE /v1/product/4', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default)
                .delete('/v1/product/4');
            chai_1.expect(res.status).to.equal(200);
        });
    });
    it('should fail GET (non-existent) /v1/product/4', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app_1.default).get('/v1/product/4');
            chai_1.expect(res.status).to.equal(404);
        });
    });
});
//# sourceMappingURL=product.test.js.map