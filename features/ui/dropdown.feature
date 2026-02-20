@ui
Feature: Dropdown
  As a user
  I want to select an option
  So that I can submit my preference

  Background:
    Given I am on the Dropdown page

  @outline
  Scenario Outline: Select an option from dropdown
    When I select "<option>" from the dropdown
    Then the dropdown value should be "<option>"

    Examples:
      | option   |
      | Option 1 |
      | Option 2 |