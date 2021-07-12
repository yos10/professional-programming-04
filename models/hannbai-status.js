'use strict';

const { sequelize, DataTypes } = require('./sequelize-loader');

const Status = sequelize.define(
  'status',
  {
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Status;
