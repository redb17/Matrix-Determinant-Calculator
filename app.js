var exp = require('express');
var app = exp();
var ctr = require('./controllers/control.js');
var port = process.env.PORT || 8080

//template engine
app.set('view engine', 'ejs');

//static files
app.use(exp.static('./public'));

//start
ctr(app);
app.listen(port);
