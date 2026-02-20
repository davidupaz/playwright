@async @flaky-safe
Feature: Dynamic Loading
  As a user
  I want content to load dynamically
  So that I can view hidden elements after loading

  Scenario: Example 1 - element is hidden then becomes visible
    Given I open Dynamic Loading "Example 1"
    When I start the loading process
    Then I should eventually see the loaded text "Hello World!"

  Scenario: Example 2 - element is not present then appears
    Given I open Dynamic Loading "Example 2"
    When I start the loading process
    Then I should eventually see the loaded text "Hello World!"