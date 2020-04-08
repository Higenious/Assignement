const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const  multer   =  require('multer');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  })
  var upload = multer({ storage: storage });



  
/** Initialize route */
router.post('/user/create',upload.any(), userController.crateUser);
router.get('/user/getall', userController.getAlll);
router.post('/user/delete', userController.deleteUser);
router.get('/user/userdetails', userController.getUSerByid);



/** Export Module */
module.exports = router;