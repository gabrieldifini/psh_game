const db = require("../models");
const { Stat, Player } = db;

exports.findTop10 = (req, res) => {
  Stat.findAll({ order: [["score", "DESC"]], limit: 10, include: Player, raw: true, nest: true })
    .then((data) => {
      const result = data.map(stat => ({
        nickname: stat.Player.nickname,
        profile_image: stat.Player.profile_image,
        score: stat.score,
      }));
      const response = {
        success: true,
        result,
      };
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "An error occurred while retrieving the stats.",
      });
    });
};

exports.create = async (statObj) => {
  try {
    const { nickname, profile_image, score } = statObj;
    const player = await Player.create({ nickname, profile_image });
    const stat = await Stat.create({ PlayerId: player.id, score });
  } catch (err) {
    console.error("An error occurred while saving the stat.");
  }
};
