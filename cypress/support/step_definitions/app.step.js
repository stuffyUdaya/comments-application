import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {formatCommentCreatedDate} from '../../../src/utils/comment.util';

const msg = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
const name= 'John Doe';

Given("I visit the home page", () => {
  cy.visit("/");
});

Then("the header should be visible", () => {
  cy.get("#label").should("be.visible").should('contains.text', 'Name')
});

Then("the comment cards are visible", () => {

});

Then("I click in the text input and type name", () => {
  cy.get(`[data-testid=comment-form__name]`).should("be.visible").type(name)

  // Assert value was entered  
  .should('have.value', 'John Doe')
});

Then("I click in the text area and type message", () => {
  cy.get(`[data-testid=comment-form__message]`).should("be.visible").type(`${msg}`)
  .should('have.value', `${msg}`);
});

Then("I click the Comment button and see new comment added", () => {
  cy.get(`[data-testid=comment-form__submit]`).should("be.visible").click();
});

Then("I see the new comment card added", () => {
  const createdDate = new Date();
  const formattedDate = formatCommentCreatedDate(createdDate);
  cy.get(`#root > div > div > div.comments > div:nth-child(1) > div.comment-content`).should("be.visible").should('contains.text', msg);
  cy.get('#root > div > div > div.comments > div:nth-child(1) > div.comment-footer').should("be.visible").should('contains.text', `${name} on ${formattedDate}`);
});