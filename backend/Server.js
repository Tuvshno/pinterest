const express = require("express")
const app = express();
var cors = require("cors");

//Database
const connectDB = require('./MongoDbConnect')
const MONG_URI = "mongodb+srv://tuvshno:Icanownu123@nodeexpressprojects.adw5qbo.mongodb.net/Pinterest?retryWrites=true&w=majority"

//Middleware
app.use(express.json())
app.use(cors())

//Routers
const posts = require('./routers/posts')
app.use('/api/v1/posts', posts)

//Start Server
const start = async () => {
  try {
    await connectDB(MONG_URI)
    app.listen(3000, console.log('listening to port 3000...'))
  } catch (error) {
    console.log(error)
  }
}

start()