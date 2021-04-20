const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        first_name: {type: String, require: true},
        last_name: {type: String, require: true},
        email: {type: Number},
        phone_number: {type: Number},
        company_name: {type: String},
        company_website: {type: String},
        job_title: {type: String},
        employees: {type: String}
    }, {collection: 'users'}
)

const model = mongoose.model('UserSchema', UserSchema)

model.exports = model