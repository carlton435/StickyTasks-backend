import express from 'express'
import routers from './routers.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use('/api', routers)


app.listen(3001, () => {
  console.log('server is running on http://127.0.0.1:3001');
})