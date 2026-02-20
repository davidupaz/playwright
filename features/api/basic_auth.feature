@api @auth
Feature: Basic Auth
  As a user
  I want to access protected content using basic authentication
  So that I can view secured pages

  Scenario: Access basic auth page with valid credentials
    When I open the Basic Auth page with username "admin" and password "admin"
    Then I should see a page message containing "Congratulations! You must have the proper credentials."