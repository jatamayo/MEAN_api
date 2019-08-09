const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB Connected')) // Promise success connection
    .catch(err => console.error(err)); // Promise error connection

module.exports = mongoose;