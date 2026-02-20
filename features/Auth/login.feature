@auth @smoke
Feature: Form Authentication
  As a user
  I want to log in
  So that I can access the secure area

  Background:
    Given I am on the Form Authentication page

  @positive
  Scenario: Successful login with valid credentials
    When I login with username "tomsmith" and password "SuperSecretPassword!"
    Then I should be redirected to the Secure Area
    And I should see a flash message containing "You logged into a secure area!"

  @negative @outline
  Scenario Outline: Unsuccessful login with invalid credentials
    When I login with username "<username>" and password "<password>"
    Then I should remain on the login page
    And I should see a flash message containing "<message>"

    Examples:
      | username  | password               | message               |
      | tomsmith  | wrongpass              | Your password is invalid! |
      | wronguser | SuperSecretPassword!   | Your username is invalid! |
      |           | SuperSecretPassword!   | Your username is invalid! |
      | tomsmith  |                        | Your password is invalid! |