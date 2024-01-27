'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPaymentMethod.belongsTo(models.User)
      // define association here
    }
  }
  UserPaymentMethod.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserPaymentMethod',
  });
  return UserPaymentMethod;
};