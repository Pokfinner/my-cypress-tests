

describe("testes principais", () => {

    before(() => {

        cy.visit("http://127.0.0.1:5500/")

    })

    beforeEach(() => {

        cy.reload()

    })

    it("Verificar Contas de Carrinho", () => {


        cy.get("input[name='price']").should(($el) => {

        
            cy.wrap($el).invoke('val')

        })
        


        // 1
        cy.get("input[name='price']")
            .should("have.value", 0)




        // 2
        cy.get("input[type='checkbox']")
            .check('pizza')



        cy.get("input[name='price']")
            .should("have.value", 9.5)
        cy.get("input[type='checkbox']")
            .uncheck(["pizza", "coke", "dessert"])

        // 3
        cy.get("input[type='checkbox']")
            .check('pizza')


        cy.get("input[type='checkbox']")
            .check('coke')

        cy.get("input[name='price']")
            .should("have.value", 13)
        cy.get("input[type='checkbox']")
            .uncheck(["pizza", "coke", "dessert"])

        console.log("oi")

        cy.get("input[type='checkbox']")
            .check(['pizza', 'coke', 'dessert'])
        cy.get("input[type='checkbox']")
            .uncheck(["pizza", "coke", "dessert"])
        cy.get("input[name='price']")
            .should("have.value", 0)


        console.log("oizao")

        /*
              // Visitar o topdevs.pt

              // 1. Verificar se, se não se selecionar nada, dá 0€
              // 2. Verificar se, se selecionar só pizza, dá 9.5€
              // 3. Verificar se, se selecionar pizza + coke, dá 13€
              // 4. Selecionar tudo e desslecionar tudo, ver se da 0€
        */

    })

    it("Verificar funcionalidade de Checkout", () => {

        cy.visit("http://127.0.0.1:5500/")

        cy.get("input[type='checkbox']")
            .check(['pizza', 'coke', 'dessert'])
        cy.get("form").submit()

        cy.get(".success").should("exist")


        /*

            Fazer uma compra e, após checkout, a mensagem com a classe
            success deve existir!

        */

    })

})
