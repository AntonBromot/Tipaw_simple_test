const Boom = require('boom');
const Collections = require("../db/models/Collections")
const Updates = require("../db/models/Updates")

const { fieldsFilterBySchema } = require("../helpers")
const { RES_COLLECTIONS_DEFAULT_VALUES, RES_COLLECTIONS_SCHEMA } = require("../schemas/CollectionsSchema")

async function createCollection(request, h) {
    const { payload: { src, title, year, legendId } } = request;

    let collection;
    try {
        collection = await Collections.create({ src, title, year, legendId })
        await Updates.findOneAndUpdate({}, { collections: collection.updatedAt }, { "new": true})
    } catch (e) {
        throw Boom.internal('Can not create collection. => ', e.message);
    }

    collection = fieldsFilterBySchema( collection, RES_COLLECTIONS_SCHEMA, RES_COLLECTIONS_DEFAULT_VALUES )

    return collection
}

async function getCollection(request, h) {
    const { params: { year } } = request

    let collection;
    try {
        collection = await Collections.findOne({ year })
    } catch (e) {
        throw Boom.internal('Can not get collection. => ', e.message);
    }

    if ( !collection )  throw Boom.badRequest(`Collection not found!`);

    collection = fieldsFilterBySchema( collection, RES_COLLECTIONS_SCHEMA, RES_COLLECTIONS_DEFAULT_VALUES )

    return collection
}

async function getAllCollections(request, h) {
    let collections;
    try {
        collections = await Collections.find()
    } catch (e) {
        throw Boom.internal('Can not get collections. => ', e.message);
    }

    collections = collections.map( item => fieldsFilterBySchema( item, RES_COLLECTIONS_SCHEMA, RES_COLLECTIONS_DEFAULT_VALUES ) )

    return collections
}

async function updateCollection( request, h ) {
    const { payload, payload: { year } } = request,
          updatedAt = new Date(),
          data = { ...payload, updatedAt }

    let collection;
    try {
        collection = await Collections.findOneAndUpdate( { year }, data, { "new": true} )
        await Updates.findOneAndUpdate({}, { collections: updatedAt }, { "new": true})
    } catch (e) {
        throw Boom.internal('Can not update collection. => ', e.message);
    }

    if ( !collection )  throw Boom.badRequest(`Collection not found!`);

    collection = fieldsFilterBySchema( collection, RES_COLLECTIONS_SCHEMA, RES_COLLECTIONS_DEFAULT_VALUES )

    return collection
}

module.exports = { createCollection, getAllCollections, getCollection, updateCollection }
