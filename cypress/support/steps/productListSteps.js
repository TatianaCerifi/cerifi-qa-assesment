import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import productListPage from "../pages/productListPage";

And('add product to cart', function () {
    productListPage.addProductToCart()
});

And('click cart on product list page', function () {
    productListPage.clickCartButton()
});

And('verify logged in on product list page', function () {
    productListPage.verifyLoggedIn()
});



