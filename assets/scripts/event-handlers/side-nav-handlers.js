'use strict'

const dataStore = require('../data')
const dashboardHandlers = require('./dashboard-handlers')

const renderSideNav = () => {
  //adds boolean to each object to show if object has containing_object prop for templating
  let treatedData = dataStore.data.map((obj) => {
    if (obj.containing_object) {
      obj.hasContainingObject = true
    } else {
      obj.hasContainingObject = false
    }
    return obj
  })
    let sideNavTemplate = require('../templates/side-nav.handlebars')
    $('.side-nav').html(sideNavTemplate({
      data: dataStore.data
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
