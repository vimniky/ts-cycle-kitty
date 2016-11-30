import * as http from 'http'
import * as url from 'url'
import * as express from 'express'

const app = express()

const PORT = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello ts-kitty~ !')
})

app.listen(PORT, function() {
  console.log('Demo Express server listening on port %d in %s mode', PORT, app.settings.env)
})
