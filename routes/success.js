const express = require('express');
const router = express.Router();


router.get('/job_application/success',(req,res,next) => {
    res.render('success',{ Title: 'Application was sumbitted',path: '/job_application/success'});
    });

module.exports = router;