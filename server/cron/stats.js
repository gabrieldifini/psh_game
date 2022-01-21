const CronJob = require("cron").CronJob;
const statController = require("../controllers/stat.js");

const { NODE_ENV_USERS_URL } = require("dotenv").config().parsed;
const axios = require("axios");

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getStats = () => {
  const results = randomNumberBetween(0, 10);
  const url = `${NODE_ENV_USERS_URL}${results}`
  let playersStats = []
  
  if(results) {
    axios(url)
      .then((response) => {
        playersStats = response.data.results.map(player => ({
          nickname: player.login.username,
          profile_image: player.picture.large,
          score: randomNumberBetween(1, 100)
        }))
        playersStats.forEach(stat => { statController.create(stat) })
      })
      .catch((err) => console.error(err));
  }
};

const cron = new CronJob("*/5 * * * *", getStats, null, true);

module.exports = { cron };
