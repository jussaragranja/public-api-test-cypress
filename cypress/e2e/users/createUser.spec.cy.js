import { getRandomEmail } from '../../utils/userUtils';

describe('User API - Create', () => {
  let userData;

  beforeEach(() => {
    cy.fixture('user').then((user) => {
      userData = { ...user, email: getRandomEmail() };
    });
  });

  it('should create a new user successfully', function () {
    cy.createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include({
        name: userData.name,
        email: userData.email,
        gender: userData.gender,
        status: userData.status,
      });
      cy.wrap(response.body.id).as('userId');
    });
  });
});