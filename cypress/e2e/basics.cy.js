/// <reference types="cypress" />


describe('basicos de objetos e array', () => {


  it('testes de objetos', () => {

    /// criar três objetos com propriedades à escolha

    // 1. comparar se o primeiro objeto é igual ao segundo
    // 2. comparar se o primeiro objeto é igual ao segundo com deep copy
    // 3. verificar se o objeto 3 tem a propriedade bananas
    // 4. verificar se o objeto 4 está vazio

    const obj = {
      a: 1,
      b: 2
    }

    const bananas1 = {
      a: 1,
      b: 2
    };

    const objVazio = {}

    expect(obj).equal(obj)
    //expect(bananas1).include("b", 5)
    //expect(bananas1).to.have.property("b")

    expect({}).to.be.empty


  })

  it('testes de array', () => {
  
    const frutas = [1, 2, 3]
    expect(frutas).to.have.members([1, 2, 3])
    expect(frutas).to.include.members([1, 3])
  
    expect(frutas).to.not.be.empty
  
  })

})

it('testes de dados', () => {

  const f = 1
  const a = "dois"
  const b = true
  const d = null
  const c = undefined
  const e = []

  expect(f).to.be.a('number')
  expect(b).to.be.a('string')
  expect(c).to.not.be.an('object')
  expect(d).to.be.null
  expect(f).to.be.an('array')

})

