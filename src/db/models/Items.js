const mongoose = require("mongoose")

const itemsModel = mongoose.Schema({
    type: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    year:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    mainImage: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    name:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    hierarchy: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Items", itemsModel)
