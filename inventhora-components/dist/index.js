
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./inventhora-components.cjs.production.min.js')
} else {
  module.exports = require('./inventhora-components.cjs.development.js')
}
