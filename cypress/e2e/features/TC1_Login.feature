Feature: Test Case 1: Login Feature
  Login with valid and invalid credentials and see the expected result

  Background: Go to SwagLabs Page
    Given I on the login SwagLabs page

  Scenario Outline: Login with valid credentials
    When I login with valid username <username> and password <password>
    Then I should be logged in
    Examples:
      |username  |password|
      |standard_user | secret_sauce|
      |problem_user | secret_sauce|
      |error_user | secret_sauce|
      |visual_user | secret_sauce|

  Scenario Outline: Login with invalid credentials
    When I login with invalid username <username> and password <password>
    Then I should see the error message <message>
    Examples:
      |username |password |message |
      |locked_out_user |secret_sauce |Epic sadface: Sorry, this user has been locked out.|
      |standard_user |wrong_password |Epic sadface: Username and password do not match any user in this service|


