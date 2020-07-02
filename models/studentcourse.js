'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentCourse extends Model {
    static associate(models) {
      StudentCourse.belongsTo(models.Student)
      StudentCourse.belongsTo(models.Course)
    }
  };
  StudentCourse.init({
    StudentId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentCourse',
  });
  return StudentCourse;
};