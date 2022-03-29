var express = require('express');
var router = express.Router();
const { getCurrentUser, createUser, getAllUsers, deleteUserById, updatedUser  } = require('./controller/userController');
// const { jwtMiddleware } = require('./lib/authMiddleware/jwtMiddlerware');
/* GET users listing. */
router.get('/', function (req, res, next) {res.send('Hello world')});
router.post('/create-user', createUser); 
router.get('/get-all-users', getAllUsers);
router.get('/get-current-user/:id', getCurrentUser);
router.delete('/delete-user-by-id/:id', deleteUserById);
router.put('/update-user', updatedUser);











module.exports = router; 