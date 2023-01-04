'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  company.init({
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    elaxisti: DataTypes.FLOAT,
    categoryId: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    mo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};