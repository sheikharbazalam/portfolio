Feature: Increment Button Test

  Scenario: Increment count when the button is clicked
    Given I visit the home page
    When I click the "Increment" button
    Then the count should increase by 1

  Scenario: Update input field value
    Given I visit the home page
    When I type "Hello World" into the input field
    Then the input field value should be "Hello World"
