const mongoose = require("mongoose")

const updatesModel = mongoose.Schema({
    collections: {
        type: Date,
        default: Date.now
    },
    legends: {
        type: Date,
        default: Date.now
    },
    items: {
        type: mongoose.Schema.Types.Mixed,
        default: ""
    }
})


module.exports = mongoose.model("Updates", updatesModel)
