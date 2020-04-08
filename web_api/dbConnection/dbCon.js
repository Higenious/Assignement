const mongose = require('mongoose');
const url = 'mongodb://localhost/my_database';
const log4js = require('log4js');
const logger = log4js.getLogger()
logger.level = "debug"

mongose.connect(url, { useUnifiedTopology: true, NewUrlParser: true },(err )=>{
        if(err){
            logger.error('error while connecting to database');
        }
        else{
            logger.info('connected to db successfully!');
        }
})