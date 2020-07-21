// Import modules
const express = require('express');

// Set up express routing
const router = express.Router();


// Routes
router.get('/', (req,res) => res.render('landing'))

router.get('/about', (req,res) => res.render('about'))

router.get('/blog', (req,res) => res.render('blog'))

router.get('/blogClass', (req,res) => res.render('blogClass'))

router.get('/blogDom', (req,res) => res.render('blogDom'))

router.get('/blogFizzBuzz', (req,res) => res.render('blogFizzBuzz'))

router.get('/contact', (req,res) => res.render('contact'))

router.get('/iss', (req,res) => res.redirect('/iss/index.html'))

router.get('/calculator', (req,res) => res.redirect('/calculator/index.html'))



// Export router
module.exports = router;