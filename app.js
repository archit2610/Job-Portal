const express = require('express');
const homepage = require('./routes/home')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const jobpage = require('./routes/job')
const successpage = require('./routes/success');

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',homepage);
app.get('/job_application',jobpage);
app.get('job_application/success',successpage)

app.listen(3000);