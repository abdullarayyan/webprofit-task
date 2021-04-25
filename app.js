const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')

mongoose.connect('mongodb://localhost:27017/webprofit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.post('/api/register', async (req, res) => {
    const {first, second_name, mail, companysite, phone, emp, job, airport_code} = req.body
    // if (!first || typeof first !== 'string') {
    //     return res.json({ status: 'error', error: 'Invalid firstname' })
    // }
    try {
        const response = await User.create({
            first_name: first,
            last_name: second_name,
            email: mail,
            phone_number: phone,
            company_name: airport_code,
            company_website: companysite,
            job_title: job,
            employees: emp
        })
        console.log("User created successfully" + response)
    } catch (error) {
        return res.json({status: 'error', error: 'FIRSTNAME not valid'})
    }
    //console.log(req.body)
    res.json({status: 'ok'})
})
const PORT = process.env.PORT || 20000;
app.listen(PORT, () => {
    console.log(`server running ${PORT}`)
});