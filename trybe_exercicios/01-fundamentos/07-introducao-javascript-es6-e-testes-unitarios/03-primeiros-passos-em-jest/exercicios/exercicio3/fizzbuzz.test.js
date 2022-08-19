const { describe } = require('yargs');
const myFizzBuzz = require('./fizzbuzz');

describe('testa a função fizzbuzz', () => {
  it('testes de retorno', () => {
    expect(myFizzBuzz(15)).toEqual('fizzBuzz');
  });
});
