@ui
Feature: Add/Remove Elements
  As a user
  I want to add and remove elements
  So that I can manage dynamic UI components

  Background:
    Given I am on the Add Remove Elements page

  Scenario: Add multiple elements and remove one
    When I click "Add Element" 3 times
    Then I should see 3 "Delete" buttons
    When I click the first "Delete" button
    Then I should see 2 "Delete" buttons