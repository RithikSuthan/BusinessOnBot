const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/records1', (req, res)=>{
    client.query('Select * from records1', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();