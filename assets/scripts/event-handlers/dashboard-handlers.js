'use strict'

const dataStore = require('../data')

const dashboardActions = {
  renderDashboard:(clickedItem) => {
    let selectedItem = clickedItem || dataStore.selectedItem
    let dashboardTemplate = require('../templates/main-view.handlebars')
    $('.dashboard').html(dashboardTemplate({
      selectedItem: selectedItem
    }));
  },
}


module.exports = dashboardActions
