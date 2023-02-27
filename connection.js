const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root123",
    database: "BusinessOnBot"
})

module.exports = client