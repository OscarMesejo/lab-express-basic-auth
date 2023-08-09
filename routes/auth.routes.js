// routes/auth.routes.js
 
const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');


 
// GET route ==> to display the signup form to users

router.get('/signup', (req, res) => res.render('auth/signup'));

router.get('/login', (req, res) => res.render('auth/login'));
 
// POST route ==> to process form data

router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body;
   
    // make sure users fill all mandatory fields:
    if (!username || !email || !password) {
      res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
      return;
    }
    
})
 
module.exports = router;