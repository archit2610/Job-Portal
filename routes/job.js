const express = require('express');
const router = express.Router();


router.get('/job_application',(req,res,next) => {
    res.render('job',{ Title: 'application',path: '/job_application'});
    });

module.exports = router;