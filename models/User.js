const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: String,
    scoreTotal: {
        type: Number,
        default: 0,
    },

    scoreWeekly: {
        type: Number,
        default: 0,
    },

    scoreMonthly: {
        type: Number,
        default: 0,
    },

    createdOn: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('User', UserSchema);