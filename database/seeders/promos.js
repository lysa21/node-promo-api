const Faker = require('../seeds')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('promos', Faker('promos'), {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('promos', null, {})
  }
}
