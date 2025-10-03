import LoginPage from '../support/page-objects/LoginPage'
import ForgotPasswordPage from '../support/page-objects/ForgotPasswordPage'

describe('Fitur Forgot Password OrangeHRM', () => {
    
    beforeEach(() => {
        LoginPage.visit()
        LoginPage.goToForgotPassword()
    })

    it('Harus berhasil navigasi ke halaman reset password', () => {
        cy.url().should('include', '/auth/requestPasswordResetCode')
        
        ForgotPasswordPage.usernameField.should('be.visible')
        ForgotPasswordPage.resetButton.should('be.visible')
    })
    
    it('Harus kembali ke halaman login saat tombol Cancel ditekan', () => {
        ForgotPasswordPage.cancelReset()
        
        cy.url().should('include', '/auth/login')
        LoginPage.loginButton.should('be.visible')
    })
})