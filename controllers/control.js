var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('display');
  });

};
