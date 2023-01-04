'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menu_categories.init({
    menuId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'menu_categories',
  });
  return menu_categories;
};