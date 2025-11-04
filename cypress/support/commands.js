Cypress.Commands.add('createUser', (userData) => {
  return cy.fixture('user').then((user) => {
    const body = userData || user;
    return cy.request({
      url: '/users',
      method: 'POST',
      headers: { Authorization: `Bearer ${Cypress.env('API_TOKEN')}` },
      body,
    });
  });
});

Cypress.Commands.add('updateUser', (id, data) => {
  return cy.request({
    url: `/users/${id}`,
    method: 'PUT',
    headers: { Authorization: `Bearer ${Cypress.env('API_TOKEN')}` },
    body: data,
  });
});

Cypress.Commands.add('deleteUser', (id) => {
  return cy.request({
    url: `/users/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${Cypress.env('API_TOKEN')}` },
  });
});

Cypress.Commands.add('isRegistered', (id, expectedStatus = 200) => {
  return cy.request({
    failOnStatusCode: false,
    url: `/users/${id}`,
    headers: { Authorization: `Bearer ${Cypress.env('API_TOKEN')}` },
  }).its('status').should('eq', expectedStatus);
});