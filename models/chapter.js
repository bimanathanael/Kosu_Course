'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    static associate(models) {
      Chapter.belongsTo(models.Course)
    }
  };
  Chapter.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chapter',
    validate : {
      formValidator() {
        if ( !this.name || !this.content) {
          throw new Error(" Please complete all requirement ")
        }
      }
    }
  });
  return Chapter;
};