const app = require('express')()

const PORT = process.env.PORT  || 4444

app.get('/', (req, res) => res.send('Hello!'))

app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`)
})
