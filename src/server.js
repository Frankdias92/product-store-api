require('express-async-errors')

const migrationsRun = require('./database/sqlite/migrations')
const uploadConfig = require('./configs/upload')

const AppError = require('./utils/AppError')
const express = require('express')
const routes = require('./routes')

const cors = require('cors')

// access to database SQL
migrationsRun()


const app = express()

app.use(cors())
app.use(express.json())


app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

// access to routes on file index.js
app.use(routes)

app.use(( error, req, res, next ) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode.json({
            status: 'error',
            message: error.message
        }))
    }
    console.error(error)

    return res.status(500).json({
        status: 'error',
        message: "Internal server error"
    })
})












const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on address: http://localhost:${PORT}`))
/* 
app.get('/', (req, res) => {
    res.send('Hello, word!')
})

// Params are require on every route!
// add new route message  |  Route Params
app.get('/message/:id/:user', (req, res) => {
    const { id, user } = req.params
    
    res.send(`
        Message Id: ${id},
        User Id: ${user}.
    `)
})

// Route Query
app.get('/users', (req, res) => {
    const { page, limit } = req.params

    res.send(`Page: ${page}, Display: ${limit}`)
})


// Route POST
app.post('/users', (req,res) => {
    const { name, email, comment } = req.body

    res.json({ name, email, comment })
}) */