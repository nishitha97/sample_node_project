const mongoose = require("../Schema/UserSchema");
const UserSchema = mongoose.model('User');

var UserController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var user = new UserSchema({
                userName: data.userName,
                password: data.password
            });
            user.save().then(() => {
                resolve({status: 200, message: "Added new user"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = (id,data) => {
        return new Promise((resolve, reject) => {
            UserSchema.update({_id:id},data).then(()=>{
                resolve({status:200,message:"update user"})
            })

            .catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
    this.search = (name) => {
        return new Promise((resolve, reject) => {

           UserSchema.find({userName:name}).exec().then(()=>{
               resolve({status:200,message:"update user"})
           })
                .catch(err => {
                    reject({status: 500, message: "Error:- " + err});
                })
        })
    }




}
module.exports = new UserController();