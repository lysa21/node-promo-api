
const path = require('path')

module.exports = function createFixtureRoutes (fixtureURI) {
  const basePath = process.env.NODE_ENV || 'development'
  const fixturePath = path.resolve(`database/fakers/${basePath}`, fixtureURI)

  const Fixture = require(fixturePath)
  return Fixture()
}
