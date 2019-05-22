const express = require("express");
const Routes=express.Router();
const UserRoute=require("./src/User/User.Route");

Routes.use('/user/',UserRoute);

module.exports=Routes;
