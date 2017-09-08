'use strict'

const renderDashboard = () => {
  let dashboardTemplate = require('../templates/dashboard.handlebars')
  $('body').html(dashboardTemplate({

  }));
}

module.exports = {
  renderDashboard
}
