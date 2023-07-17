describe('Item Logic', () => {

    it('should create an item', () => {

        // 1. Visitar e Fazer Login com as Credenciais!



        cy.visit(`http://149.100.138.125:6002/`)


        cy.fixture('user').then(({ admin: { email, password } }) => {

            cy.xpath("//form[@id='form']//input[@type='email']")
                .type(email)

            cy.xpath("//form[@id='form']//input[@type='password']")
                .type(password)

        })

        cy.xpath(`//button[@type='submit']`).click()

        cy.xpath('//h1').should('contain', 'Items')

        cy.xpath("//*[@href='/createitem']/*[contains(@class, 'button-menu')]").click()

        cy.fixture('items').then((item) => {

            cy.xpath("//form/*[1]/*[contains(@class, 'forms')]").type(item.name)
            
            cy.xpath("//*[2]/*[contains(@class, 'forms')]").type(item.price)
            
            cy.xpath("//*[3]/div/*[contains(@class, 'forms')]").type(item.description)
            
            cy.xpath("//*[contains(@class, 'mb-4')]").selectFile('./cypress/img/pc.png')


            if (item.available) {
                cy.xpath("//*[@id='available']").click()
            }
            else {
                cy.xpath("//*[@id='unavailable']").click()
            }
            
            cy.xpath("//*[7]/*[contains(@class, 'forms')]").select(item.category)
            
            
            cy.xpath("//*[@type='submit']").click()

            cy.xpath("//table").contains(item.name)
        })

    })

})