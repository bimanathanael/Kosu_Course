'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.hasMany(models.Chapter)
      Course.belongsToMany (models.Student, { through : "StudentCourses" } )
      Course.belongsTo(models.Instructor)
    }
  };
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    InstructorId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (course) => {
        if(!course.description){
          course.description = "Description not given";
        };
      }
    },
    sequelize,
    modelName: 'Course',
    validate : {
      formValidator() {
        if ( !this.name || !this.InstructorId) {
          throw new Error(" Please complete all requirement ")
        }
      }
    }
  });
  return Course;
};