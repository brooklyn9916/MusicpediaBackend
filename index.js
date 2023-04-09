const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const quizRoute = require('./routes/quiz')
const jobSheetRoute = require('./routes/jobsheet')
const historyRoute = require('./routes/history')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => (
    res.send('Hello World!')
))

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheets', jobSheetRoute)
app.use('/api/histories', historyRoute)

app.listen(port, () => (
    console.log(`Example app listening at http://localhost:${port}`)
))