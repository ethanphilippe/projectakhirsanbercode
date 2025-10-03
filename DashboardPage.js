class DashboardPage {
    get pageHeader() {
        return cy.get('.oxd-topbar-header-title')
    }
    
    get welcomeMessage() {
        return cy.get('.oxd-userdropdown-tab')
    }

    get timeAtWorkWidget() {
        return cy.contains('Time at Work')
    }

    get logoutLink() {
        return cy.contains('Logout')
    }

    verifyDashboardLoad() {
        this.pageHeader.should('contain', 'Dashboard')
        this.welcomeMessage.should('be.visible')
        this.timeAtWorkWidget.should('be.visible')
    }

    logout() {
        this.welcomeMessage.click()
        this.logoutLink.click()
    }
}

export default new DashboardPage()