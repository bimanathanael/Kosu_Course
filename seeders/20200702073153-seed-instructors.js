'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * return queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Instructors', [
      {
        full_name: 'Purwanto',
        email: "pur@gmail.com",
        password : "admin",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        full_name:"Edison Zhou",
        email: "edizho@gmail.com",
        password : "admin",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Instructors', null, {});
  }
};
