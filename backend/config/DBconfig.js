require("dotenv").config()
const mongoose = require('mongoose');
const mongo_url = process.env.Mongo_url;

mongoose.connect(mongo_url || "mongodb://localhost:27017/portfolio",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection;
connection.on("error",()=>{
    console.log("Error in connecting to database");
})

connection.on("connected",()=>{
    console.log("Connected to database");
})

module.exports = connection;