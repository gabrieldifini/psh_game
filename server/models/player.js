"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {}
  Player.init(
    {
      nickname: DataTypes.STRING,
      profile_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Player",
      tableName: "players",
    }
  );
  return Player;
};
