import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {

    get usernameField() {
        return $('#user-name')
    }

    get passwordField() {
        return $('#password')
    }

    get loginButton() {
        return $('#login-button')
    }

    async enterLoginDetails(user, pass) {
        await this.usernameField.setValue(user)
        await this.passwordField.setValue(pass)
    }

    async clickLoginBtn() {
        await this.loginButton.click()
    }

    async loginToApp(user, pass) {
        await this.enterLoginDetails(user, pass)
        await this.clickLoginBtn()
    }
}

export default new LoginPage()