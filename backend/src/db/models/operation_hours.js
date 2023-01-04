'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operation_hours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  operation_hours.init({
    day: DataTypes.STRING,
    start_at: DataTypes.TIME,
    end_at: DataTypes.TIME,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'operation_hours',
  });
  return operation_hours;
};