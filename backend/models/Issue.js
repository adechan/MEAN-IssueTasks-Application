// Issue is the data model 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let IssueSchema = new Schema({    // schema configuration
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: "Open"
    }
});


const Issue = mongoose.model('Issue', IssueSchema);
module.exports = Issue;