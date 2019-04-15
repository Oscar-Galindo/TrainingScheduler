"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("events", [
      {
        eventName: "Cochella",
        eventDate: "12 April 2019",
        eventTume: "8:00pm",
        eventLocation: "Lakewood, NJ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventName: "Cochella",
        eventDate: "13 April 2019",
        eventTume: "8:00pm",
        eventLocation: "Lakewood, NJ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventName: "Cochella",
        eventDate: "14 April 2019",
        eventTume: "8:00pm",
        eventLocation: "Lakewood, NJ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};