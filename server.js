const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

// run prior to every request
// app.use(async (req, res, next) => {
//     req.db = db
//     next()
// })
app.use(require('./utils/querySanitizer'))

app.use('/api/v1/test', require('./api/test'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`[ra-wellness-node] Node.js express server running on port ${ PORT }`)
})
