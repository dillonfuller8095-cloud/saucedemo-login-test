import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Dillon SauceDemo Full Test Suite', () => {

    it('standard_user should login successfully', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('problem_user should login successfully', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('problem_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('performance_glitch_user should login successfully', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('performance_glitch_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('standard_user should NOT login with wrong password', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('standard_user', 'wrong_password')
        const error = await $('[data-test="error"]')
        await expect(error).toBeDisplayed()
    })

    it('locked_out_user should NOT login', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('locked_out_user', 'secret_sauce')
        const error = await $('[data-test="error"]')
        await expect(error).toBeDisplayed()
    })

    it('problem_user should NOT login with wrong password', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('problem_user', 'wrong_password')
        const error = await $('[data-test="error"]')
        await expect(error).toBeDisplayed()
    })

    it('performance_glitch_user should NOT login with wrong password', async () => {
        await LoginPage.open()
        await LoginPage.loginToApp('performance_glitch_user', 'wrong_password')
        const error = await $('[data-test="error"]')
        await expect(error).toBeDisplayed()
    })

})