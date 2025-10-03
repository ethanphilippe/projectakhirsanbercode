import LoginPage from '../support/page-objects/LoginPage'
import DashboardPage from '../support/page-objects/DashboardPage'

describe('Verifikasi Halaman Dashboard dan Logout', () => {
    
    beforeEach(() => {
        LoginPage.visit()
        LoginPage.login('Admin', 'admin123') 
        cy.url().should('include', '/dashboard') 
    })

    it('Harus memuat halaman Dashboard dengan elemen utama', () => {
        DashboardPage.verifyDashboardLoad()
        cy.contains('Directory').should('be.visible')
    })
    
    it('Harus berhasil logout dan kembali ke halaman login', () => {
        DashboardPage.logout()
        cy.url().should('include', '/auth/login')
        LoginPage.loginButton.should('be.visible')
    })
})