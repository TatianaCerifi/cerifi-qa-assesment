import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import cartPage from "../pages/cartPage";

Then('verify product added to cart', function () {
    cartPage.verifyProductAdded()
});
