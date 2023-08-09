// routes/auth.routes.js
 
const { Router } = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const mongoose = require('mongoose');


 
// GET route ==> to display the signup form to users

router.get('/signup', (req, res) => res.render('auth/signup'));

router.get('/login', (req, res) => res.render('auth/login'));

router.get('/userProfile', (req, res) => res.render('users/user-profile'));

// POST route ==> to process form data

router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body;
   
    // make sure users fill all mandatory fields:
    if (!username || !email || !password) {
      res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
      return;
    }
    bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      console.log(`Password hash: ${hashedPassword}`);
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      // res.redirect('/userProfile');
    })
    .catch(error =>{
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: error.message });
    } else {
     next(error);
    }
});
})



    
    

 
module.exports = router;