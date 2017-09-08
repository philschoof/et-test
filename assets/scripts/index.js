'use strict';

const data = require('./data')
const dashboardHandlers = require('./event-handlers/dashboard-handlers')

$(() => {
  debugger
  dashboardHandlers.renderDashboard()
  data.loadJSONData()
  console.log(data)
})
