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
     return queryInterface.bulkInsert('StudentCourses', [
      {
        StudentId: 1,
        CourseId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        StudentId: 1,
        CourseId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        StudentId: 2,
        CourseId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        StudentId: 2,
        CourseId: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        StudentId: 3,
        CourseId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        StudentId: 3,
        CourseId: 3,
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
    return queryInterface.bulkDelete('StudentCourses', null, {});
  }
};
