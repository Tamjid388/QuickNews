import express from 'express'

import { articleRoutes } from './routes/news.routes.ts'

const app = express()

app.use(express.json())

//ROutes

app.use("/articles",articleRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app