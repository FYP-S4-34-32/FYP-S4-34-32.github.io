//========================================================//
// File which handles all the request to /api/user routes //
//========================================================//

// imports
const express = require('express')

/* ============================================================================== *\
|   import controller functions from userController.js in the controllers folder   |
|   these functions will be invoked and handled in the controller file whenever    |
|   the routes are requsted. e.g. /api/user/login will invoke the loginUser        |
|   function in userController.js                                                  |
\* ============================================================================== */
const { loginUser, signupUser, getUserInfo } = require('../controllers/userController')

// invoke express router object
const router = express.Router()

// login route - POST because we are sending data for each request
router.post('/login', loginUser)

// signup route - POST because we are sending data for each request
router.post('/signup', signupUser)

// profile page route - GET because we are retrieving data
router.get('/profile', getUserInfo)

// EXPORT router
module.exports = router