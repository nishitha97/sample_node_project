const express=require("express");
const app=express.Router();
const Controller =require('./User.Controller');

app.post('/',(req,res)=>{
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports=app;