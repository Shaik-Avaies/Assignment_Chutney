const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port =  3000;
const path = require('path');

// app.use(express.static('./assests'));
app.use(express.static(path.join(__dirname, 'assests')));

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',require('./routers'));

app.listen(port,function(err,result){
    if(err){
        console.log("Error in listening to the port");
        return ;
    }
    console.log("Listening to the port");
});



