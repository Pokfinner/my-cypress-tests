import userData from './../fixtures/checkout'

describe('Test fixture for checkout', () => {

    it('Should select the favourite foods and amount the correct sum', () => {

        cy.visit('https://topdevs.pt/')

   

        const sets = Object.keys(userData).map(name => userData[name])

        cy.wrap(sets).each($el => {

            cy.get("input[data-cy='favFood']").uncheck()

            cy.wrap($el.foods).each($food => {

                cy.get("input[type='checkbox']")
                    .check($food)

            })

            cy.get("input[name='price']")
                .should('have.value', $el.sum)

        })

    })

})


