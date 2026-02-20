@files
Feature: File Upload
  As a user
  I want to upload a file
  So that I can submit documents

  Background:
    Given I am on the File Upload page

  Scenario: Upload a single file successfully
    When I upload the file:
      | path              |
      | fixtures/test.txt |
    And I submit the upload
    Then I should see an uploaded file name "test.txt"