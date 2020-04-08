const express = require('express');
const app = express();
const log4js = require('log4js');
const logger = log4js.getLogger()
logger.level = "debug"
const bodyParser = require('body-parser');
const port = 5000;
const userRoute =  require('./route/route');
const cors = require('cors');
const dbConn = require('./dbConnection/dbCon');
const multer   =  require('multer');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.all('*',userRoute)
app.get('/',(req, res)=>{
    logger.info('getting users');
    res.send('users');
})




/** app listen  */
app.listen(port, ()=>{
    console.log(`server started successfully ${port}`);
})