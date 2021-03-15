const token = '06c2c09312699913ab233d46662002b78501bba311436de8bb52a3b420af741d'
let random
let idUser

describe('Create a new user', () => {

    it('Create a new user - sucess', () => {
        random = Cypress._.random(0, 10000)
        cy.request({
            url: '/users',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`},
            body: {
                name: "Jussara Teste",
                email: "jussarateste"+random+"@gmail.com",
                gender: "Female",
                status: "Active"
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(200) //201
            expect(res.body).to.have.property('code', 201)
            expect(res.body.data).to.have.property('id')
            expect(res.body.data).to.have.property('name', 'Jussara Teste')
            expect(res.body.data).to.have.property('email', 'jussarateste'+random+'@gmail.com')
            expect(res.body.data).to.have.property('gender', 'Female')
            expect(res.body.data).to.have.property('status', 'Active')
        })

        cy.get('@response').then(res => {
            cy.isRegistered(res.body.data.id, token, 200)
        })

        cy.get('@response').then(res => {
            idUser = (res.body.data.id)
        })

    })
})

describe('Update user details', () => {
    
    it('Update user details - sucess', () => {
        random = Cypress._.random(0, 10000)
        cy.request({
            url: `/users/${idUser}`,
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}`},
            body: {
                email: "jussarateste"+random+"@gmail.com"
            }
        }).as('response')
        .its('body.code').should('be.equal', 200)
                
        cy.get('@response').then(res => {
            expect(res.body.data).to.have.property('email', 'jussarateste'+random+'@gmail.com')
        })
    })


})



describe('Delete user', () => {

    it('Delete user - sucess', () => {
        cy.request({
            url: `/users/${idUser}`,
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}`}
        })
        .its('body.code').should('be.equal', 204)

        cy.isRegistered(idUser, token, 404)
    })

})