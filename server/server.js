const express = require('express');
const path = require('path');
const cors = require('cors');
const port = 4000;
const app = express();

const server = require('http').createServer(app);

app.use(cors());

app.get('/', (req, res) => {
    res.send({message:'running well'});
});

server.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})