'use strict'

const dataStore = {
  loadJSONData:$.getJSON(('../../schema.json'), (json) => {
    dataStore.data = json
    dataStore.selectedGroup = dataStore.data[0]
  })
}

module.exports = dataStore
