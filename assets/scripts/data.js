'use strict'

const data = require('../../schema.json')

const dataStore = {
  loadJSONData:$.getJSON(('../../schema.json'), (json) => {
    dataStore.data = json
    dataStore.selectedItem = dataStore.data[0]
  })
}

module.exports = dataStore
