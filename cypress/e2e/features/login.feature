Feature: Login Test Suite

  Scenario: Login successfully
    Given visit swaglab website
    When login with standart user
    And verify logged in on product list page