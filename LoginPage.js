class LoginPage {
    get usernameField() { 
        return cy.get('input[name="username"]') 
    }

    get passwordField() { 
        return cy.get('input[name="password"]') 
    }

    get loginButton() { 
        return cy.get('button[type="submit"]') 
    }

    get forgotPasswordLink() {
        return cy.contains('Forgot your password?')
    }

    get errorMessage() {
        return cy.get('.oxd-alert-content-text')
    }

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    login(username, password) {
        this.usernameField.type(username)
        this.passwordField.type(password)
        this.loginButton.click()
    }
    
    goToForgotPassword() {
        this.forgotPasswordLink.click()
    }
}

export default new LoginPage()