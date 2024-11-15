require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.static('public'));


app.listen(process.env.port,()=>{
    console.log(`listening on port ${process.env.port}`);
})