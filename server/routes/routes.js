const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('PSh Game Stats backend is up and running!')
})

module.exports = router