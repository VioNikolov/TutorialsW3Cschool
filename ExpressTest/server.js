const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());


require('./routes/api.routes')(app);
require('./routes/server.routes')(app);

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send("It works!");
});

app.get('/all', (req, res) => { 
    res.send("All");
});

app.get('/json', (req, res) => { 
    res.send({name: "Vio", age: 25});
});


app.listen(3000, () => console.log("Server started at 3000"));