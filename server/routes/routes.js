const express = require('express')
const router = express.Router()

const statController = require("../controllers/stat.js");

router.get('/', (req, res) => { res.send('PSh Game Stats app is up and running!') })

router.get('/topStats', statController.findTop10)

module.exports = router