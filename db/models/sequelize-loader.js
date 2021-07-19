'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://postgres:postgres@db/products_data',
  {
    logging: false,
  }
);

module.exports = {
  sequelize,
  DataTypes,
};
