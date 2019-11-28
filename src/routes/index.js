const collections = require('./collections'),
      items = require('./items'),
      legends = require('./legends'),
      updates = require('./updates')

module.exports = [ ...collections, ...items, ...legends, ...updates ]
