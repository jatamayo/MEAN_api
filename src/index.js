const express = require('Express');
const app = express();
const path = require('path');
const cors = require('cors');

// const indexRoutes = require('./routes/index.js');
const tasksRoutes = require('./routes/tasks.js');


// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
// app.use(indexRoutes);
app.use('/api',tasksRoutes);


// Static files
// npm install rxjs@6.0.0 --save
// ng update @angular/cli
// ng update @angular/core
app.use(express.static(path.join(__dirname, 'dist/client')));

// Start server
app.listen(3000, function(){
    console.log('Server on port', app.get('port'));
});


