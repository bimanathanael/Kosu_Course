'use strict';
const bcrypt = require(`bcrypt`)
const saltRounds = 10
const {
  Model
} = require('sequelize');

const getFullName = require(`../helpers/function`)
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsToMany (models.Course, { through : "StudentCourses" } )

    }
    get first_name() {
      let splitter = this.full_name.split(` `)
      return splitter[0]
    }

  };
  Student.init({
    full_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Email must be in email format!`
        }
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    validate: {
      emptyField() {
        if (this.full_name === `` || this.email === `` || this.password === ``) {
          throw new Error(`All field must be filled!`)
        }
      }
    }
  });

  Student.beforeCreate((instance, option) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(instance.password, salt);
    instance.password = hash
  })
  return Student;
};