describe("Testar Stubs", () => {


    it(`Testar o alert()`, () => {

        cy.visit(`https://topdevs.pt`)

        cy.get('#alert-btn').click()

        
        const stub = cy.stub()
        
        cy.on('window:alert', stub)
        
        cy.get('#alert-btn').click().then(() => {
            cy.log(stub.getCall(0))
            expect(stub.getCall(0)).to.be.calledWith('bom dia')
        })

    })

    it(`Testar o confirm()`, () => {

        cy.visit(`https://topdevs.pt`)

        // Criar Stub
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.on('window:confirm', stub)
        
        cy.get('#confirm-btn').click().then(() => {
            cy.log(stub.getCall(0))
            expect(stub.getCall(0)).to.be.calledWith('Tem a Certeza?')
            
            expect(stub.getCall(1)).to.be.calledWith('Confirmado')
        })
  




    })

})

