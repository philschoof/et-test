'use strict'

const dataStore = require('../data')
const mainSectionTemplate = require('../templates/main-section.handlebars')

const renderMainSection = (clickedGroup) => {
  let selectedGroup = clickedGroup || dataStore.selectedGroup
  $('.main-section').html(mainSectionTemplate({
    selectedGroup
  }))
}

module.exports = {
  renderMainSection
}
