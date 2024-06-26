const express = require('express')
const dotenv  = require('dotenv');
const bodyParser = require('body-parser');
const usersRouters = require('./router/userRouter');
const connectDB = require('./config/db')

dotenv.config();

const app = express()
app.use(bodyParser.json());

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("hello abeni")
})
connectDB()

app.use('/users', usersRouters)

app.listen(port, () =>{
    console.log(`the server port is ${port}`)
})