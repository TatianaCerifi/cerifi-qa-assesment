Feature: Complete Purchase Flow

    Background: Go to SwagLabs Page
        Given I logged in on SwagLabs page

    Scenario: Purchase a product full workflow
        When I add a product
        And I proceed to cart
        Then I should see the product in the cart and badge updated
        When I proceed to checkout
        And I fill the form
        Then I should see my order information
        When I proceed to finish
        Then I should see the checkout complete page
