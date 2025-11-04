import { getRandomEmail } from '../../utils/userUtils';

describe('User API - Update', () => {
  let userId;
  let token = Cypress.env('API_TOKEN');

  before(() => {
    cy.createUser().then((response) => {
      userId = response.body.id;
    });
  });

  it('should update user email successfully', () => {
    const newEmail = getRandomEmail();
    cy.updateUser(userId, { email: newEmail }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.email).to.eq(newEmail);
    });
  });
});