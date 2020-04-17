const mongoose = require("mongoose");

const messagesModel = mongoose.Schema({
    firstName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    phoneNumber: {
        type: mongoose.Schema.Types.String
    },
    object: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    message: {
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

module.exports = mongoose.model("Messages", messagesModel)
