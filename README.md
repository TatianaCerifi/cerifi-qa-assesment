# Installation

## npm version used for the project 10.7.0 (install it prior to do npm install)

### for GUI and headless mode , the first step is to install dependencies

> npm install

# Running Tests

## if its desired to see the outcome in the GUI

> npx cypress open

then select the browser and the spec(test) its desired to run

### Steps for running tests in headless mode 

> npx cypress run

or

> npm run test

# Framework Explanation

it was used the Page Object Model(POM), as its scalable and easy to maintain in the future as it isnt needed to change every part of the application but the class itself(Page) that was changed. 

it can be found in the Pages folder all the classes (Pages) that were created . if its needed to add more elements or more interactions,  class might be modified. 

in the e2e folder it will be found the spec that contain all the tests, it was decided to have independant tests , one for login, one for testing the inventory, one for testing the cart and the last one for testing the whole checkout process.

# Future-proofing

as it was mentioned it can be expanded in order to test other features, e.g the sort feature in the inventory, in this case it will only be needed to add this element and do the specific interaction.

I also added one command for intercepting the API calls, this will be used in case of the API can start responding really slow.

Also it can be added a fixture file (JSON), in order to extract data from a specific file instead of hardcoding it as it is now.
