'use strict'

const dashboardActions = require('./dashboard-handlers')
const sideNavHandlers = require('./side-nav-handlers')

const addHandlers = () => {
  dashboardActions.renderDashboard()
  sideNavHandlers.renderSideNav()
  sideNavHandlers.addSideNavHandlers()
}

module.exports = {
  addHandlers
}
