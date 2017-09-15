'use strict'

const dataStore = require('../data')
const mainSectionHandlers = require('./main-section-handlers')
const sideNavTemplate = require('../templates/side-nav.handlebars')

const renderSideNav = () => {
  $('.side-nav').html(sideNavTemplate({
    data: dataStore.data
  }))
}

const addSideNavHandlers = () => {
  $('.side-nav-item').on('click', function() {
    let groupIndex = $(this).data('index');
    dataStore.selectedGroup = dataStore.data[groupIndex]
    mainSectionHandlers.renderMainSection(dataStore.selectedGroup)
  })

  $('.group-property').on('click', function() {
    let clickedGroupIndex = $(this).data('index')
    let clickedGroup = dataStore.selectedGroup.containing_object ?
      dataStore.selectedGroup.containing_object.properties[clickedGroupIndex] : dataStore.selectedGroup.properties[clickedGroupIndex]
    mainSectionHandlers.renderMainSection(clickedGroup)
  })
}

module.exports = {
  renderSideNav,
  addSideNavHandlers
}
