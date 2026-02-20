@auth
Feature: Logout
  As an authenticated user
  I want to log out
  So that my session is ended

  Background:
    Given I am logged in as a valid user

  @smoke
  Scenario: Logout from the secure area
    When I click the Logout button
    Then I should be redirected to the login page
    And I should see a flash message containing "You logged out of the secure area!"