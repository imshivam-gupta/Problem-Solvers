const express = require('express')
const app = express()

const cors=require('cors')
const dotenv = require('dotenv')

const connectDB = require('./config/db.js')
connectDB()

const path = require('path')


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors({}))

const userRoutes  = require('./routes/userRoutes.js')
app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT,  () => { console.log(`Server is running on port ${PORT}`)} )


