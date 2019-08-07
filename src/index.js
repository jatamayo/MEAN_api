const express = require('Express');
const app = express();
const cors = require('cors');
const indexRoutes = require('./routes/index.js');
const tasksRoutes = require('./routes/tasks.js');


// Settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use(indexRoutes);
app.use(tasksRoutes);



app.listen(3000, function(){
    console.log('Server on port 3000', app.get('port'));
});


