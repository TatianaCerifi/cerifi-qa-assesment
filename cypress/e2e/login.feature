Feature: Login to a website

    Scenario: Successful login
        Given I open the website
        When I enter my username "standard_user" and password "secret_sauce"
        And I click the login button
        Then I should be logged in