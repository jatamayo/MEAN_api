const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); //Set server to read json format


// Routes
app.use('/api/employees',require('./routes/employee.routes')); // Call route employee


// Starting server
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});