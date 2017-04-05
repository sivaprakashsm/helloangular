var app = express();

var port = process.env.PORT || 8080;

//app.set('port', (process.env.PORT || 8080));

app.listen(port,function(){
    console.log('Server started at port '+port);
});