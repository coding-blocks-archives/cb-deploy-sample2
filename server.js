const app = require('express')()
const {
  db,
  Tasks
} = require('./db')

const PORT = process.env.PORT || 4444

app.get('/', (req, res) => res.send('Hello!'))

app.get('/tasks', async (req, res) => {
  res.send(await Tasks.findAll())
})

app.get('/tasks/add', async (req, res) => {
  await Tasks.create({
    name: req.query.name,
    done: req.query.done == 'true'
  })
  res.redirect('/tasks')
})

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Started on http://localhost:${PORT}`)
    })

  })
  .catch(console.error)
