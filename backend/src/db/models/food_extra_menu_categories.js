'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food_extra_menu_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  food_extra_menu_categories.init({
    foodId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'food_extra_menu_categories',
  });
  return food_extra_menu_categories;
};