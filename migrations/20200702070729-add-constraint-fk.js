'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Courses',  {
      fields : ['InstructorId'],
      type : "foreign key",
      name : "custom_fk_InstructorId",
      references : {
        table: "Instructors",
        field: "id"
      },
      onUpdate : "CASCADE",
      onDelete : "CASCADE"
    })
    .then( () => {
      return queryInterface.addConstraint("Chapters",  {
        fields : ["CourseId"],
        type: "foreign key",
        name : "custom_fk_CourseId",
        references:{
          table: "Courses",
          field: "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      })
    })
    .then( () => {
      return queryInterface.addConstraint("StudentCourses",  {
        fields : ["StudentId"],
        type: "foreign key",
        name : "custom_fk_StudentId",
        references:{
          table: "Students",
          field: "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      })
    })
    .then( () => {
      return queryInterface.addConstraint("StudentCourses",  {
        fields : ["CourseId"],
        type: "foreign key",
        name : "custom_fk_CourseId",
        references:{
          table: "Courses",
          field: "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Courses', "custom_fk_InstructorId")
      .then ( () => {
        return queryInterface.removeConstraint("Chapters", "custom_fk_CourseId")
      })
      .then ( () => {
        return queryInterface.removeConstraint("StudentCourses", "custom_fk_StudentId")
      })
      .then ( () => {
        return queryInterface.removeConstraint("StudentCourses", "custom_fk_CourseId")
      })
  }
};
