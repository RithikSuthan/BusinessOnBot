const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:root123@localhost:5432/BusinessOnBot';
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);


app.get('/search', (req, res) => {
    
    client.query(`Select * from records1 where branch like '%${req.query.q}%' or address like '%${req.query.q}%' or city like '%${req.query.q}%' or district like '%${req.query.q}%' or states like '%${req.query.q}%' or bank_name like '%${req.query.q}%' order by ifsc  limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
            if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
    client.end;
})


app.get('/branch', function (req, res) {
    client.query(`select * from records1 where branch= '${req.query.q}' order by ifsc desc limit ${req.query.limit} offset ${req.query.offset}`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});


app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});