'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * return queryInterface.bulkInsert('People', [{
     *   full_name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Students', [
      {
        full_name: 'Mayana Fitri',
        email: 'mayfit@gmail.com',
        password :'admin',
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        full_name:'Bima Nathanael',
        email: 'bimnat@gmail.com',
        password :'admin',
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        full_name:"Khairil Mubarak",
        email: "khamub@gmail.com",
        password :'admin',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
