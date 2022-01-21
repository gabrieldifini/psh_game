const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const env = require('dotenv').config().parsed
const cron = require('./cron/stats')
const routes = require(env.NODE_ENV_ROUTES_PATH)

const app = express()

app.use(myconn(mysql, {
    host: env.MYSQL_DB_HOST,
    port: env.MYSQL_DB_PORT,
    user: env.MYSQL_DB_USER,
    password: env.MYSQL_DB_PASSWORD,
    database: env.MYSQL_DB_NAME,
}))

app.use(cors())
app.use(routes)

app.listen(env.PORT, () => {
    console.log(`Server running on http://localhost:${env.NODE_ENV_PORT}`)
})