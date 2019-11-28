const Joi = require('joi');

const RES_COLLECTIONS_SCHEMA = {
    src: Joi.string().optional(),
    title: Joi.string().optional(),
    year: Joi.string().optional(),
    legendId: Joi.string().optional(),
    updatedAt: Joi.date().optional(),
    createdAt: Joi.date().optional(),
}

const RES_COLLECTIONS_DEFAULT_VALUES = {}

const CollectionsSchemas = {
    requestSchemas: {
        createCollection: {
            src: Joi.string().required(),
            title: Joi.string().required(),
            year: Joi.string().required(),
            legendId: Joi.string().required(),
        },
        updateCollection: {
            src: Joi.string().optional(),
            title: Joi.string().optional(),
            year: Joi.string().optional(),
            legendId: Joi.string().optional(),
        },
        getCollection: { year: Joi.string().required() },
        getAllCollections: {}
    },
    responseSchemas: {
        createCollection: RES_COLLECTIONS_SCHEMA,
        getCollection: RES_COLLECTIONS_SCHEMA ,
        updateCollection: RES_COLLECTIONS_SCHEMA,
        getAllCollections: Joi.array().items( Joi.object().keys( RES_COLLECTIONS_SCHEMA ) )
    }
}

module.exports = { CollectionsSchemas, RES_COLLECTIONS_SCHEMA, RES_COLLECTIONS_DEFAULT_VALUES }


