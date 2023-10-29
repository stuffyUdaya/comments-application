Feature: Snapshot website test scenarios
  Scenario: visiting the home page - successful search
    Given I visit the home page
    Then the header should be visible
    Then I click in the text input and type name
    Then I click in the text area and type message
    Then I click the Comment button and see new comment added
    Then I see the new comment card added