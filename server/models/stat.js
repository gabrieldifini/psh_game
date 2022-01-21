"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stat extends Model {
    static associate(models) {
      this.belongsTo(models.Player);
    }
  }
  Stat.init(
    {
      score: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Stat",
      tableName: "stats",
    }
  );
  return Stat;
};
