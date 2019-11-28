const mongoose = require("mongoose")

const legendsModel = mongoose.Schema({
    legendTitle: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    legendImg: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    legendData:{
        type: mongoose.Schema.Types.Mixed,
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

module.exports = mongoose.model("Legends", legendsModel)
