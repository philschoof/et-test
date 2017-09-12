'use strict'

const dataStore = require('../data')
const dashboardHandlers = require('./dashboard-handlers')
const sideNavTemplate = require('../templates/side-nav.handlebars')

const renderSideNav = () => {
  $('.side-nav').html(sideNavTemplate({
    data: dataStore.data
  }));
}

const addSideNavHandlers = () => {
  $('.side-nav-item').on('click', function() {
    let navItemIndex = $(this).data('index');
    dataStore.selectedItem = dataStore.data[navItemIndex]
    dashboardHandlers.renderDashboard(dataStore.selectedItem)
  })

  $('.group-property').on('click', function() {
    let clickedItemIndex = $(this).data('index')
    let clickedItem = dataStore.selectedItem.containing_object ?
      dataStore.selectedItem.containing_object.properties[clickedItemIndex] : dataStore.selectedItem.properties[clickedItemIndex]
    dashboardHandlers.renderDashboard(clickedItem)
  })
}

module.exports = {
  renderSideNav,
  addSideNavHandlers
}
