'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserAddress.belongsTo(models.User)
      // define association here
    }
  }
  UserAddress.init({
    userId: DataTypes.STRING,
    cep: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.NUMBER,
    neighborhood: DataTypes.STRING,
    complement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserAddress',
  });
  return UserAddress;
};