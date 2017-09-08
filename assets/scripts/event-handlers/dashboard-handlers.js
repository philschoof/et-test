'use strict'

const dataStore = require('../data')

const dashboardActions = {
  renderDashboard:() => {
    let dashboardTemplate = require('../templates/dashboard.handlebars')
    $('.dashboard').html(dashboardTemplate({
      selectedItem:dataStore.selectedItem
    }));
  },
}


module.exports = dashboardActions
