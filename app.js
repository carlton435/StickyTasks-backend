import express from 'express'
import routers from './routers.js'
import connection from './APIs/connection_db.js'
const app = express()

app.use('/api', routers)


app.listen(3001, () => {
  console.log('server is running on http://127.0.0.1:3001');
})