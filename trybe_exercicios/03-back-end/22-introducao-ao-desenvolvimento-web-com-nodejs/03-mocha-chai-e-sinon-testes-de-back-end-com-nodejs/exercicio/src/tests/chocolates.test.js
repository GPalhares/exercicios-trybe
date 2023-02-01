const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const sinon = require('sinon');
const fs = require('fs').promises;
const { default: mockChocolate } = require('./chocolatesMock');
const { expect } = chai;

chai.use(chaiHttp);

describe('Testes Api Chocolates', () => {

    this.beforeEach(
        function(){
            sinon.stub((fs,'readFile').returns(mockChocolate))
        }
    )
  // METODO GET
  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna todos os chocolates', async function () {
      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).length.to.deep.equal(4);
    });
  });

  // METODO POST
  describe('Usando o método POST em /chocolates', function () {
    it('Adiciona um novo chocolate', async function () {
      const novoChocolate = {
        name: 'Kinder Ovo',
        brandId: 1,
      };

      const response = await chai
        .request(app)
        .post('/chocolates')
        .send(novoChocolate);

      expect(response.status).to.be.equal(201);
      expect(response.body.chocolates.name).to.be.equal(newChocolate.name);
      expect(response.body.chocolates.brandId).to.be.equal(newChocolate.brandId);
    });
  });

  // METODO DELETE
  describe('Usando o método DELETE em /chocolates/:id', function () {
    it('Remove um chocolate existente', async function () {
      const chocolateId = 1;

      const response = await chai
        .request(app)
        .delete(`/chocolates/${chocolateId}`);

      expect(response.status).to.be.equal(204);
      expect(response.body).to.be.empty;
    });
  });

  // METODO PUT
  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const chocolateId = 1;
      const updatedChocolate = {
        name: 'Kinder Ovo',
        brandId: 2,
      };

      const response = await chai
        .request(app)
        .put(`/chocolates/${chocolateId}`)
        .send(updatedChocolate);

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate.name).to.be.equal(updatedChocolate.name);
      expect(response.body.chocolate.brandId).to.be.equal(
        updatedChocolate.brandId
      );
    });
  });
});
