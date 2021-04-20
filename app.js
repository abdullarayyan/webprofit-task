const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const User = require('./model/user')

mongoose.connect('mongodb://localhost:27017',{
})

const app = express();

app.use('/',express.static(path.join(__dirname,'public')));
app.use(bodyParser.json())
app.post('/api/register',async (req, res) =>{
    
    console.log(req.body)
    res.json({status:'ok'})
})

const PORT = process.env.PORT || 3000;
// app.listen(process.env.PORT ||3000,process.env.ip||'0.0.0.0')
app.listen(PORT, () => {
    console.log(`server running ${PORT}`)
});