// require express package to make an instance of the express router
const express = require('express')

// import controller functions
const { loginUser, signupUser, getUserInfo, adminLogin, superAdminLogin } = require('../controllers/userController')

// invoke express router
const router = express.Router()

// login route - POST because we are sending data for each request
router.post('/login', loginUser)

// signup route - POST because we are sending data for each request
router.post('/signup', signupUser)

// homepage route - GET because we are retrieving data *JUST FOR TESTING
router.get('/:email', getUserInfo)

// Admin login route 
router.post('/AdminLogin', adminLogin)

// Super Admin login route
router.post('/SuperAdminLogin', superAdminLogin)

// export router
module.exports = router