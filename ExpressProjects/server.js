//import the express module
const express = require("express");

//Create Express App
const app = express();


//Static
app.use(express.static("public"))

//Import the created routes
const userRouter = require('./routes/users')

//Use the routers
app.use('/users',userRouter)

//Listen at port 
app.listen(3000)