'use strict';

const dataStore = require('./data')
const eventHandlers = require('./event-handlers')

$(() => {
  dataStore.loadJSONData
  .then(() => {
    eventHandlers.addHandlers()
  })
})
