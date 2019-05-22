const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
   userName:{
       type:String
   },
    password:{
        type:String
    }


});

mongoose.model('User',UserSchema);

mongoose.connect('mongodb://localhost:27017/comments',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("connected to db");
    }

});

module.exports=mongoose;