const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');




const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    json:true
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'nugget007',
    resave: false,
    saveUninitialized: false,
}))
app.use(cors(corsOptions));


const accessToken = require('./controllers/accessToken');
app.use('/', accessToken);



app.listen(process.env.PORT || 8000, () =>{
    console.log('listening on port 9000');
})