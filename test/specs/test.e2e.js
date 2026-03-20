import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Dillon SauceDemo Test', () => {

    it('should login with valid credentials', async () => {

        await LoginPage.open()
        await LoginPage.loginToApp('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrlContaining('inventory')

    })

    // 👇 ADD IT RIGHT HERE
    it('should NOT login with bad credentials', async () => {

        await LoginPage.open()
        await LoginPage.loginToApp('locked_out_user', 'wrong_password')

        const error = await $('.error-message-container')
        await expect(error).toBeDisplayed()

    })

})