'use strict';

const { sequelize, DataTypes } = require('./sequelize-loader');

const Product = sequelize.define(
  'product',
  {
    productId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    listPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salesDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Product;
