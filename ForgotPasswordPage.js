class ForgotPasswordPage {
    get usernameField() { 
        return cy.get('input[name="username"]') 
    }

    get resetButton() { 
        return cy.contains('Reset Password') 
    }

    get cancelButton() {
        return cy.contains('Cancel')
    }
    

    get successHeader() { 
        return cy.get('.orangehrm-card-container > h4') 
    }
    
    submitResetRequest(username) {
        this.usernameField.type(username)
        cy.wait(500) 
        this.resetButton.click({ force: true }) 
    }

    cancelReset() {
        this.cancelButton.click()
    }
}

export default new ForgotPasswordPage()