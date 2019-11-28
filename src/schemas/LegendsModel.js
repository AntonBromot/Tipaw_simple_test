const Joi = require('joi');

const RES_LEGEND_DATA_SCHEMA = {
    index: Joi.number().optional(),
    title: Joi.string().allow('').optional(),
    uri: Joi.string().optional(),
    text: Joi.string().allow('').optional()
}

const RES_LEGENDS_SCHEMA = {
    _id: Joi.any().optional(),
    legendTitle: Joi.string().optional(),
    legendImg: Joi.string().optional(),
    legendData: Joi.array().items( Joi.object().keys( RES_LEGEND_DATA_SCHEMA ) ),
    updatedAt: Joi.date().optional(),
    createdAt: Joi.date().optional(),
}

const RES_LEGENDS_DEFAULT_VALUES = {}

const LegendsSchemas = {
    requestSchemas: {
        createLegend: {
            legendTitle: Joi.string().required(),
            legendImg: Joi.string().required(),
            legendData:  Joi.array().items( Joi.object().keys( RES_LEGEND_DATA_SCHEMA ) ).optional(),
        },
        updateLegend: {
            _id: Joi.any().required(),
            legendTitle: Joi.string().optional(),
            legendImg: Joi.string().optional(),
            legendData:  Joi.array().items( Joi.object().keys( RES_LEGEND_DATA_SCHEMA ) ).optional(),
        },
        getLegend: { _id: Joi.string().required() },
        getAllLegends: {}
    },
    responseSchemas: {
        createLegend: RES_LEGENDS_SCHEMA,
        getLegend: RES_LEGENDS_SCHEMA,
        updateLegend: RES_LEGENDS_SCHEMA,
        getAllLegends: Joi.array().items( Joi.object().keys( RES_LEGENDS_SCHEMA ) )
    }
}

module.exports = { LegendsSchemas, RES_LEGENDS_SCHEMA, RES_LEGENDS_DEFAULT_VALUES }


