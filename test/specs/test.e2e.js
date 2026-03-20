import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Dillon SauceDemo Test', () => {

    it('should login with valid credentials', async () => {

        await LoginPage.open()
        await LoginPage.loginToApp('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })

    it('should NOT login with bad credentials', async () => {

        await LoginPage.open()
        await LoginPage.loginToApp('standard_user', 'wrong_password')

        const error = await $('[data-test="error"]')
        await expect(error).toBeDisplayed()

    })

})