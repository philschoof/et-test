'use strict'

const mainSectionHandlers = require('./main-section-handlers')
const sideNavHandlers = require('./side-nav-handlers')

const addHandlers = () => {
  mainSectionHandlers.renderMainSection()
  sideNavHandlers.renderSideNav()
  sideNavHandlers.addSideNavHandlers()
}

module.exports = {
  addHandlers
}
