require("dotenv").config()
const express = require('express');
const Port = process.env.PORT || 3000 ;
const app = express();
const dbconfig = require("./config/DBconfig")

app.listen(Port,()=>{
    console.log(`server listening on ${Port}`)
})