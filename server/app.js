const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

//server running port
const port = 8000;

//express server
const app = express();

//cors for api error handling
app.use(cors());

app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Hello world")
});


app.listen(port, () =>{
    console.log(`Example app at http://localhost:${port}`);
})


