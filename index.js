const express = require("express");
const Routes=require("./Routes");
const cors=require("cors");
const BodyParser=require("body-parser");

const app=express();

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use('/',Routes);

app.listen(8081,'localhost',(err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("app started on port 8081")
    }

});