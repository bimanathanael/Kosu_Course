'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Instructor)
      Course.hasMany(models.Chapter)
      Course.belongsToMany (models.Student, { through : "StudentCourses" } )
    }
  };
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    InstructorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};