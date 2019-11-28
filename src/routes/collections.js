const collectionsController = require('../controllers/collectionsController');
const { CollectionsSchemas: { responseSchemas, requestSchemas } } = require("../schemas/CollectionsSchema");

module.exports = [
    {
        method: 'GET',
        path: '/collections/getCollection/{year}',
        handler: collectionsController.getCollection,
        options: {
            description: 'Get collection by year',
            tags: ['api', 'collections'],
            auth: false,
            validate: { params: requestSchemas.getCollection },
            response: { schema: responseSchemas.getCollection }
        }
    },
    {
        method: 'GET',
        path: '/collections/getAllCollections',
        handler: collectionsController.getAllCollections,
        options: {
            description: 'Get all collections',
            tags: ['api', 'collections'],
            auth: false,
            response: { schema: responseSchemas.getAllCollections }
        }
    },
    {
        method: 'POST',
        path: '/collections/createCollection',
        handler: collectionsController.createCollection,
        options: {
            description: 'Create new collection',
            tags: ['api', 'collections'],
            auth: false,
            validate: { payload: requestSchemas.createCollection },
            response: { schema: responseSchemas.createCollection }
        }
    },
    {
        method: 'PUT',
        path: '/collections/updateCollection',
        handler: collectionsController.updateCollection,
        options: {
            description: 'Update collection by year',
            tags: ['api', 'collections'],
            auth: false,
            validate: { payload: requestSchemas.updateCollection },
            response: { schema: responseSchemas.updateCollection }
        }
    }
];
