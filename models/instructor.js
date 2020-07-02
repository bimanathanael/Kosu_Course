'use strict';
const bcrypt = require(`bcrypt`)
const saltRounds = 10
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    static associate(models) {
      Instructor.hasMany(models.Course)
    }
    get first_name() {
      let splitter = this.full_name.split(` `)
      return splitter[0]
    }
  };

  
  Instructor.init({
    full_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
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
    modelName: 'Instructor',
    validate: {
      emptyField() {
        if (this.full_name === `` || this.email === `` || this.password === ``) {
          throw new Error(`All field must be filled!`)
        }
      }
    }
  });

  Instructor.beforeCreate((instance, option) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(instance.password, salt);
    instance.password = hash
  })
  
  return Instructor;
};