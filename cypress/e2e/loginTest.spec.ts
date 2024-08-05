const loginSteps = require('../steps/LoginSteps')
const productSteps = require('../steps/ProductSteps')


describe('Login Page Test', () => {
    beforeEach(() => {
        loginSteps.open()
    })

    const usersList: string[][] = [
        ['standard_user', 'secret_sauce'],
        ['problem_user', 'secret_sauce'],
        ['performance_glitch_user', 'secret_sauce'],
        ['visual_user', 'secret_sauce']
    ]

    it('verify elements on page', () => {
        //here should check for pass and login for smoke
        loginSteps.getUserNameField().should('be.visible')
    })

    it(`as locked_out_user I should get a error message `, () => {
        loginSteps.logIn('locked_out_user', 'secret_sauce')
        loginSteps.getErrorMessage()
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    usersList.forEach(($loginCombo) => {
        const [user, password] = $loginCombo;
        it(`as ${user} with ${password} I should be able to login `, () => {
            loginSteps.logIn(user, password)
            productSteps.getProductLabel()
                .should('be.visible')
                .and('have.text', 'Products')
        })
    })
})
