'use strict'

// const data = require()

const loadJSONData = () => {
  $.getJSON(('../../schema.json'), (json) => {
    console.log(json)
  })
}

const parsedData = {

}

module.exports = {
  loadJSONData
}
