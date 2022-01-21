const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const env = require('dotenv').config().parsed
const routes = require(env.NODE_ENV_ROUTES_PATH)

require('./cron/stats')

const app = express()

app.use(myconn(mysql, {
    host: env.MYSQL_DB_HOST,
    port: env.MYSQL_DB_PORT,
    user: env.MYSQL_DB_USER,
    password: env.MYSQL_DB_PASSWORD,
    database: env.MYSQL_DB_NAME,
}))

app.use(routes)

app.listen(env.NODE_ENV_PORT, () => {
    console.log(`Server running on http://localhost:${env.NODE_ENV_PORT}`)
})