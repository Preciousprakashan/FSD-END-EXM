const mongoose = require('mongoose');

const basicSchema = new mongoose.Schema({
    data:String,
    status:Boolean,

}, { versionKey: false });


const basicData = mongoose.model('todo', basicSchema);

module.exports = basicData;
