describe('Create an event with tasks', () => {
  beforeEach(() => {
    cy.viewport(430, 932)
  })
  it('The page is visible', () => {
    cy.visit('http://localhost:5173/#/')
    cy.contains("LoFi Plans").should("be.visible");
  })
  it('Logs into user and navigates to user page', () => {
    cy.visit('http://localhost:5173/#/')
    cy.get('input').first().type("kimdelgado1570@gmail.com");
    cy.get('input').eq(1).type("kiridea2401")
    cy.get('button').first().click();
  })
  it('Creates a new event', () => {
    cy.visit('http://localhost:5173/#/users/8898af28-a66c-4df7-941b-60669f86deda')
    cy.get('button').first().click();
    cy.get('input').first().type("test event")
    cy.get('input').eq(1).type("2024-08-12")
    cy.get('input').eq(2).type("Kiridea")
    cy.get('input').eq(3).click();
    cy.get('textarea').type("test event")
    cy.get('button').click()
  })
  it('Creates a task', () => {
    cy.visit('http://localhost:5173/#/users/8898af28-a66c-4df7-941b-60669f86deda/events/101')
    cy.get('button').eq(1).click()
    cy.get('textarea').type("test task")
    cy.wait(1000)
    cy.get('#create-task-btn').click()
  })
  it('Edits a task', () => {
    cy.visit('http://localhost:5173/#/users/8898af28-a66c-4df7-941b-60669f86deda/events/101')
    cy.get('.edit-task-button-container').first().click()
    cy.get('textarea').type(' -edited')
    cy.wait(1000)
    cy.get('.save-edited-task-btn').click()
  })
})