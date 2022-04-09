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
      shortlink.belongsTo(models.user, {
        as: "UserOwner",
        foreignKey: {
          name: "idUser"
        }
      })
    }
  }
  shortlink.init({
    idUser: DataTypes.INTEGER,
    uniqueLink: DataTypes.STRING,
    visitTime: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    titlelink: DataTypes.JSON,
    link: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'shortlink',
  });
  return shortlink;
};