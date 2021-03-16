let express = require('express');
let controllers = require('./controllers/myControllers.js');

let app = express();
let portNumber = 3000;

// Activating server
if (app.listen(portNumber)) {
    console.log('Server started at port: 3000');

    // Setting view engine
    app.set('view engine', 'ejs');

    // Setting access using Middleware
    app.use('/assets', express.static('assets'));

    // Firing controllers
    controllers(app);
}
