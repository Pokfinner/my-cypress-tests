
describe("testes principais", () => {

    before(() => {

        cy.visit("http://127.0.0.1:5500/")

    })

    beforeEach(() => {

        cy.reload()

    })


    function apiCall() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("finished"), 3000)
        })
    }


    it(`should test cy.wrap()`, () => {

        let element = {
            nome: "Diogo",
            idade: 20,
            getValue: () => {
                return 40
            }
        }

        cy.wrap(element).invoke('getValue').should('be.equal', 40)




        cy.get("input[name='pizza']").invoke("val").should('be.equal', "pizza")

        cy.document.invoke("sum")


    })

    it.only(`should test API`, () => {


        cy.request('https://jsonplaceholder.cypress.io/todos').as('todos')

        cy.get('@todos').should(({ body: $todos }) => {

            expect($todos).to.have.property("length", 200)

        })


        cy.get('@todos').should(({ body: $todos }) => {


            const objs = [
                0,
                { a: 1 },
                { a: 2 },
                { a: 3 },
                { a: 4 },
                { a: 5 }
            ]

            const numeros = [1, 2, 3, 4, 5]

            // add 1 to sum if the todo is completed
            const soma = $todos.reduce((accum, { completed }) => {
                return completed ? accum + 1 : accum
            }, 0)

            expect(soma).to.be.eq(90)



            // na realidade temos de fazer 2 chamadas
            // vamos usar o cy.request("url").then(res => {
            // cy.request("url").then(res => {})
            //})




        })

        cy.request("https://jsonplaceholder.cypress.io/users").then(({ body: $users }) => {

            // obter ID do utilizador com o nome Leanne Graham
            const { id } = $users.find(({ name }) => name === "Leanne Graham")

            // fazer uma outra chamada para obter os posts
            // fazer um slice dos primeiros 5 posts
            // percorrer os posts e verificar se o ID é o obtido anteriormente

            cy.request("https://jsonplaceholder.cypress.io/posts").then(({ body: $posts }) => {

                const slicedPosts = $posts.slice(0, 5)

                slicedPosts.forEach(({userId}) => {
                    expect(userId).to.be.eq(id)
                })

            })

        })





        /*
        > Test if there are 200 todos
        - Test if the amount of the completed todos is 90
        - Test if the name "Leanne Graham" belongs to the first 5 posts
        - Test if the user Glenna Reichert lives in Dayna Park
        */

        /*

            pokeapi.co/api/v2/pokemon/charmander

            - Testar se o Charmander tem 39 de hp a nível 1
            - Testar se o Bulbasaur tem 45 de hp a nível 1
            - Testar se o Charmander joga primeiro que o Bulbasaur a nível 1
              (charmander tem 65 de speed e o bulbasaur tem 45)

        */

    })

})