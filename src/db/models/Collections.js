const mongoose = require("mongoose")

const collectionsModel = mongoose.Schema({
    src: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    year: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    legendId: {
        type: mongoose.Schema.Types.String,
        required: true
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

module.exports = mongoose.model("Collections", collectionsModel)
