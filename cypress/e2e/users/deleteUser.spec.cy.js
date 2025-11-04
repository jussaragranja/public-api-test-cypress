describe('User API - Delete', () => {
  let userId;

  before(() => {
    cy.createUser().then((response) => {
      userId = response.body.id;
    });
  });

  it('should delete the user successfully', () => {
    cy.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(204);
    });
    cy.isRegistered(userId, 404);
  });
});