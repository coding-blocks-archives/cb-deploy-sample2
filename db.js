const Sequelize = require('sequelize')

const username = "sampleuser1"
const password = "samplepass1"
const host = "localhost"
const port = "3306"
const dbname = "sampledb1"

const DB_URL = process.env.DATABASE_URL ||
  `mysql://${username}:${password}@${host}:${port}/${dbname}`

const db = new Sequelize(DB_URL)

const Tasks = db.define('task', {
  name: Sequelize.STRING,
  done: Sequelize.BOOLEAN
})

module.exports = {
  db, Tasks
}
