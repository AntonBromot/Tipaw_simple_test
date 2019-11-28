const Boom = require('boom');

const Updates = require("../db/models/Updates")

async function getCollectionsUpdates(request, h) {
    let updates;
    try {
        updates = await Updates.findOne().select("collections")
        updates = updates.collections
    } catch (e) {
        throw Boom.internal('Can not get updates. => ', e.message);
    }

    return { updatedAt: updates }

}

async function getLegendsUpdates(request, h) {
    let updates;
    try {
        updates = await Updates.findOne().select("legends")
        updates = updates.legends
    } catch (e) {
        throw Boom.internal('Can not get updates. => ', e.message);
    }

    return { updatedAt: updates }
}

async function getItemsUpdates(request, h) {
    const { params: { year, type } } = request

    let updates;
    try {
        updates = await Updates.findOne().select("items")
        updates = updates && updates.items ? JSON.parse(updates.items) : {}
        updates = updates[year] && updates[year][type] ? updates[year][type] : ""
    } catch (e) {
        throw Boom.internal('Can not get updates. => ', e.message);
    }

    return { updatedAt: updates }
}

module.exports = { getCollectionsUpdates, getLegendsUpdates, getItemsUpdates }
