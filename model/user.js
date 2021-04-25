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
    }, {collection: 'users'},
)
const UserSchema1 = new mongoose.Schema(
    {
        airport_code: {type: String},
        name: {type: String},
        city: {type: String},
        state: {type: String}
        
    }, {collection: 'airport'}
)


module.exports = mongoose.model('users', UserSchema);
module.exports = mongoose.model('airport', UserSchema1);
