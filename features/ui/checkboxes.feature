@ui
Feature: Checkboxes
  As a user
  I want to toggle checkboxes
  So that I can select options

  Background:
    Given I am on the Checkboxes page

  Scenario: Toggle checkbox states
    Then checkbox 1 should be unchecked
    And checkbox 2 should be checked
    When I set checkbox 1 to "checked"
    And I set checkbox 2 to "unchecked"
    Then checkbox 1 should be checked
    And checkbox 2 should be unchecked