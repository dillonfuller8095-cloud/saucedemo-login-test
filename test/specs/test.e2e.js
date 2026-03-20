import LoginPage from '../pageobjects/login.page.js'

describe('Dillon SauceDemo Test', () => {

    it('should login with valid credentials', async () => {

        await LoginPage.open()

        await LoginPage.loginToApp('standard_user', 'secret_sauce')

    })

})