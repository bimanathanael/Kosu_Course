'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * return queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Courses', [
      {
        name: 'Belajar Bahasa Jepang',
        description: "PEDE berbicara bahasa Jepang hanya dalam 2 Hari ! ",
        InstructorId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        name: 'Belajar Budaya Jepang',
        description: "Mampu paham SELURUH budaya Jepang dalam waktu 5 tahun",
        InstructorId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        name: 'Belajar Kebiasaan Baik Jepang',
        description: "Mampu meniru akhlak baik masyarakat Jepang",
        InstructorId : 1,
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
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
