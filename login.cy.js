import LoginPage from '../support/page-objects/LoginPage'

describe('Fitur Login OrangeHRM Automation', () => {
    
    beforeEach(() => {
        LoginPage.visit()
    })

    it('Login sukses dan memverifikasi panggilan API menggunakan intercept', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest') 

        LoginPage.login('Admin', 'admin123') 

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.be.oneOf([302, 200]) 
            expect(interception.request.method).to.equal('POST') 
        })

        cy.url().should('include', '/web/index.php/dashboard')
        cy.contains('Dashboard').should('be.visible')
    })
    
    it('Login gagal dan memverifikasi pesan error', () => {
        LoginPage.login('user_salah', 'pass_salah') 

        LoginPage.errorMessage
            .should('be.visible')
            .and('have.text', 'Invalid credentials') 
        
        cy.url().should('include', '/web/index.php/auth/login')
    })

    it('Navigasi ke halaman Forgot Password', () => {
        LoginPage.goToForgotPassword()
        
        cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode')
        cy.contains('Reset Password').should('be.visible')
    })
})