const express = require ('express');
const bodyParser= require('body-parser');
const mongoose=require("mongoose")
const cors = require('cors');
const jwt = require("jsonwebtoken")

const productRoutes =require("./Router/productRoutes")
const userRoutes =require("./Router/userRoutes")
const adminRoutes =require("./Router/adminRoutes")


// set up express app
const app = express();
app.use(cors())

app.use(bodyParser.json());
// connect to server 
// mongoose.connect('mongodb://127.0.0.1:27017/BookShare')
// mongoose.Promise=global.Promise


///Storage
//initialize routes
app.use("/", adminRoutes)
app.use("/",userRoutes);
app.use("/", productRoutes)


app.use(function(err,req,res,next){
     res.send({error:err.message})
})

// listen for req
mongoose
  .connect(
    "mongodb+srv://lanjewarvaibhav56:VaibhavLanjewar12345@cluster0.phq7pcx.mongodb.net/BookShare?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000, ()=> {
      console.log('Node API app is running on port 5000')
      } );
  })
  .catch((err) => console.log(err));
  mongoose.Promise=global.Promise

  

module.exports=app