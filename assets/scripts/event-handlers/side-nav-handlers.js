'use strict'

const dataStore = require('../data')
const dashboardHandlers = require('./dashboard-handlers')

const renderSideNav = () => {
    let sideNavTemplate = require('../templates/partials/side-nav.handlebars')
    $('.side-nav').html(sideNavTemplate({
      data:dataStore.data,
    }));
  }

const addSideNavHandlers = () => {
  $('.side-nav-item').on('click', function() {
    let navItemIndex = $(this).data('index');
    dataStore.selectedItem = dataStore.data[navItemIndex]
    dashboardHandlers.renderDashboard()
  })
}

module.exports = {
  renderSideNav,
  addSideNavHandlers
}
