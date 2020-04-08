const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "debuge";
const userModel = require('../models/userModels').userSchema;






/** create user */
async function crateUser(req, res){
    logger.info('userInformation', req.body);
   try{
    const reqBody = req.body;
    const result = await userModel(reqBody).save();
    res.send(result);
   }catch(err){
    if (err) {
        res.send(err);
    }
   }
}



/** Get Alll user */
async function getAlll(req, res){
  const users = await userModel.find({});
  logger.info('user', users);
  if(users.length == 0){
      logger.error('errorrrrrr');
  }else{
      const response = {'message' : "users fetched succeesfully", 'data' : users, 'status':true }
      res.send(response);
  }
}


/** delete user by email Id  */
async function deleteUser(req, res){
    const mobile = req.body.mobile;
    logger.info('deleting', req.body.mobile);
    const result =  await userModel.findOneAndDelete({mobile : mobile});
    if(result){
        res.status(200).send('user deleted succesfully!');
    }else{
        res.send('Error while deleting user');
    }

}



/** Get Details by Users id */
async function getUSerByid(req, res){
     const email = req.body.email;
     const result =  await userModel.findOne({email : email});
     console.log('*',result) 
      if(result == null){
        res.status(200).send('user is not present');
      }else{
        res.send(result);
    }

}


/** export function */
module.exports.crateUser = crateUser;
module.exports.getUSerByid =getUSerByid;;
module.exports.deleteUser = deleteUser;
module.exports.getAlll =getAlll;