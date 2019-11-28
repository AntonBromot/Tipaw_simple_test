const Boom = require('boom');

const { fieldsFilterBySchema } = require("../helpers")
const Items = require("../db/models/Items")
const Updates = require("../db/models/Updates")
const { RES_ITEM_DEFAULT_VALUES, RES_ITEM_SCHEMA } = require("../schemas/ItemSchema")

async function createItem(request, h) {
    const { payload } = request,
          { type, year, mainImage, name, hierarchy, description } = payload;

    let item, itemsUpd;
    try {
        item = await Items.create({ type, year, mainImage, name, hierarchy, description })
        itemsUpd = await Updates.findOne({}).select("items")
        itemsUpd = itemsUpd && itemsUpd.items ? JSON.parse(itemsUpd.items) : {}
        itemsUpd[year] = itemsUpd[year] ? itemsUpd[year] : {}
        itemsUpd[year][type] = item.updatedAt
        itemsUpd = JSON.stringify(itemsUpd)
        await Updates.findOneAndUpdate({}, { items: itemsUpd } )
    } catch (e) {
        console.log(e)
        throw Boom.internal('Can not create item. => ', e.message);
    }

    item = fieldsFilterBySchema( item, RES_ITEM_SCHEMA, RES_ITEM_DEFAULT_VALUES )

    return item
}

async function getItem(request, h) {
    const { params: { _id } } = request

    let item;
    try {
        item = await Items.findOne({ _id })
    } catch (e) {
        throw Boom.internal('Can not get item. => ', e.message);
    }

    if ( !item )  throw Boom.badRequest(`Item not found!`);

    item = fieldsFilterBySchema( item, RES_ITEM_SCHEMA, RES_ITEM_DEFAULT_VALUES )

    return item
}

async function getAllItems(request, h) {
    const { params: { year, type } } = request,
          criteria  = { ...(year && { year }), ...(type && { type }) }

    let items;
    try {
        items = await Items.find(criteria)
    } catch (e) {
        throw Boom.internal('Can not get items. => ', e.message);
    }

    items = items.map( item => fieldsFilterBySchema( item, RES_ITEM_SCHEMA, RES_ITEM_DEFAULT_VALUES ) )
    return items
}

async function updateItem(request, h) {
    const { payload, payload: { _id } } = request,
          data = { ...payload, updatedAt: new Date() }

    let item, itemsUpd;
    try {
        item = await Items.findOneAndUpdate( { _id }, data, { "new": true} )
        itemsUpd = await Updates.findOne({}).select("items")
        itemsUpd = itemsUpd && itemsUpd.items ? JSON.parse(itemsUpd.items) : {}
        itemsUpd[year] = itemsUpd[year] ? itemsUpd[year] : {}
        itemsUpd[year][type] = item.updatedAt
        itemsUpd = JSON.stringify(itemsUpd)
        await Updates.findOneAndUpdate({}, { items: itemsUpd } )
    } catch (e) {
        throw Boom.internal('Can not update item. => ', e.message);
    }

    if ( !item )  throw Boom.badRequest(`Item not found!`);

    item = fieldsFilterBySchema( item, RES_ITEM_SCHEMA, RES_ITEM_DEFAULT_VALUES )

    return item
}

module.exports = { createItem, getAllItems, getItem, updateItem }
