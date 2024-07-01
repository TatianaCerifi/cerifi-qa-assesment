Feature: Cart Test Suite

  Background:
    Given visit swaglab website

  Scenario: Login successfully
    And login with standart user
    When add product to cart
    And click cart on product list page
    Then verify product added to cart

