'use strict';

const dataStore = require('./data')
const eventHandlers = require('./event-handlers')

$(() => {
  dataStore.loadJSONData
  .then(() => {
    console.log(dataStore.data)
    eventHandlers.addHandlers() //must wait until data is loaded to render templates and add event handlers
  })
})
