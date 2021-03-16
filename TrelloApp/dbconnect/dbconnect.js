let mongoose = require('mongoose');
let dbSchema;
let myJobs;

try {
    mongoose.connect('mongodb://localhost:27017/TrelloApp');

    dbSchema = new mongoose.Schema({
        item: String,
        priority: Number,
    });
} catch (error) {
    console.log('FromTryCatch: ' + error);
}

myJobs = mongoose.model('myJobsCollection', dbSchema);

module.exports = {
    myJobs: myJobs,
}