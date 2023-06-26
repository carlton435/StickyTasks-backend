import express from 'express'
import routes from './routes.js'

const app = express()

app.use('/', routes)
app.listen(3001, () => {
  console.log('server is running on http://127.0.0.1:3001');
})