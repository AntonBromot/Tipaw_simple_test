const Boom = require('boom');

const { fieldsFilterBySchema } = require("../helpers")
const Legends = require("../db/models/Legends")
const Updates = require("../db/models/Updates")
const { RES_LEGENDS_DEFAULT_VALUES, RES_LEGENDS_SCHEMA } = require("../schemas/LegendsModel")

async function createLegend(request, h) {
    const { payload } = request,
          { legendTitle, legendImg, legendData } = payload;

    let legend;
    try {
        legend = await Legends.create({ legendTitle, legendImg, legendData })
        await Updates.findOneAndUpdate({}, { legends: legend.updatedAt }, { "new": true})
    } catch (e) {
        throw Boom.internal('Can not create legend. => ', e.message);
    }

    legend = fieldsFilterBySchema( legend, RES_LEGENDS_SCHEMA, RES_LEGENDS_DEFAULT_VALUES )

    return legend
}

async function getLegend(request, h) {
    const { params: { _id } } = request

    let legend;
    try {
        legend = await Legends.findOne({ _id })
    } catch (e) {
        throw Boom.internal('Can not get legend. => ', e.message);
    }

    if ( !legend )  throw Boom.badRequest(`Legend not found!`);

    legend = fieldsFilterBySchema( legend, RES_LEGENDS_SCHEMA, RES_LEGENDS_DEFAULT_VALUES )

    return legend
}

async function getAllLegends(request, h) {

    let legends;
    try {
        legends = await Legends.find()
    } catch (e) {
        throw Boom.internal('Can not get legends. => ', e.message);
    }

    legends = legends.map( item => fieldsFilterBySchema( item, RES_LEGENDS_SCHEMA, RES_LEGENDS_DEFAULT_VALUES ) )

    return legends
}

async function updateLegend(request, h) {
    const { payload, payload: { _id } } = request,
          updatedAt = new Date(),
          data = { ...payload, updatedAt }

    let legend;
    try {
        legend = await Legends.findOneAndUpdate({ _id }, data, { "new": true})
        await Updates.findOneAndUpdate({}, { legends: updatedAt }, { "new": true})
    } catch (e) {
        throw Boom.internal('Can not create legend. => ', e.message);
    }

    legend = fieldsFilterBySchema( legend, RES_LEGENDS_SCHEMA, RES_LEGENDS_DEFAULT_VALUES )

    return legend
}

module.exports = { createLegend, getAllLegends, getLegend, updateLegend }
