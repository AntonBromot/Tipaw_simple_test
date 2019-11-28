const Joi = require('joi');

const RES_UPDATES_SCHEMA = {
    updatedAt: Joi.date().allow("").optional()
}

const RES_UPDATES_DEFAULT_VALUES = {}

const UpdatesSchemas = {
    requestSchemas: {
        getUpdates: {
            year: Joi.string().optional(),
            type: Joi.string().optional(),
        }
    },
    responseSchemas: {
        getUpdates: RES_UPDATES_SCHEMA,
    }
}

module.exports = { UpdatesSchemas, RES_UPDATES_SCHEMA, RES_UPDATES_DEFAULT_VALUES }

