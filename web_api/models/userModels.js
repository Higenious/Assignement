const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema  = mongoose.Schema;




const userSchema = new Schema({
    f_name : {type:String},
    l_name  : {type:String},
    email: { type: String, required: true, unique: true },
    mobile : {type:Number},
    profile_image : {type:String}   
  });




  module.exports.userSchema =  mongoose.model('userSchema',userSchema);