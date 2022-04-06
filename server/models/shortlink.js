'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shortlink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shortlink.init({
    name: DataTypes.STRING,
    titlelink: DataTypes.JSON,
    link: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'shortlink',
  });
  return shortlink;
};