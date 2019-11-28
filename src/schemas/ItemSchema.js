const Joi = require('joi');

const RES_ITEM_SCHEMA = {
    _id: Joi.any().optional(),
    type: Joi.string().optional(),
    year: Joi.string().optional(),
    mainImage: Joi.string().optional(),
    name: Joi.string().optional(),
    hierarchy: Joi.string().optional(),
    description: Joi.string().allow('').optional(),
    updatedAt: Joi.date().optional(),
    createdAt: Joi.date().optional(),
}

const RES_ITEM_DEFAULT_VALUES = {}

const ItemSchemas = {
    requestSchemas: {
        createItem: {
            type: Joi.string().required(),
            year: Joi.string().required(),
            mainImage: Joi.string().required(),
            name: Joi.string().required(),
            hierarchy: Joi.string().required(),
            description: Joi.string().optional(),
        },
        updateItem: {
            _id: Joi.any().required(),
            type: Joi.string().optional(),
            year: Joi.string().optional(),
            mainImage: Joi.string().optional(),
            name: Joi.string().optional(),
            hierarchy: Joi.string().optional(),
            description: Joi.string().optional(),
        },
        getItem: { _id: Joi.string().required() },
        getAllItems: {
            type: Joi.string().optional(),
            year: Joi.string().optional(),
        }
    },
    responseSchemas: {
        createItem: RES_ITEM_SCHEMA,
        updateItem: RES_ITEM_SCHEMA,
        getItem: RES_ITEM_SCHEMA ,
        getAllItems: Joi.array().items( Joi.object().keys( RES_ITEM_SCHEMA ) )
    }
}

module.exports = { ItemSchemas, RES_ITEM_SCHEMA, RES_ITEM_DEFAULT_VALUES }


