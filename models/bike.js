'use strict';
module.exports = (sequelize, DataTypes) => {
  const bike = sequelize.define('bike', {
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  bike.associate = function (models) {
    // associations can be defined here
  };
  return bike;
};