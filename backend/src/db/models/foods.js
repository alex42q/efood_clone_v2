'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  foods.init({
    menuCategoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    foodExtraMenuCategoriesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'foods',
  });
  return foods;
};