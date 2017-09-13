'use strict';

const dataStore = require('./data')
const eventHandlers = require('./event-handlers')

$(() => {
  dataStore.loadJSONData
  .then(() => {
    eventHandlers.addHandlers() //must wait until data is loaded to render templates and add event handlers
  })
})
