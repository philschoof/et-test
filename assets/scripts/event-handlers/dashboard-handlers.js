'use strict'

const dataStore = require('../data')
const dashboardTemplate = require('../templates/main-view.handlebars')

const dashboardActions = {
  renderDashboard:(clickedItem) => {
    let selectedItem = clickedItem || dataStore.selectedItem
    $('.dashboard').html(dashboardTemplate({
      selectedItem
    }));
  },
}


module.exports = dashboardActions
